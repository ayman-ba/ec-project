import {ChangeDetectionStrategy, Component, inject, OnInit, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  EcProductSummaryComponent
} from "../../../features/ec-product/components/presentational/ec-product-summary/ec-product-summary.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {EcButtonComponent} from "../../../shared/components/ec-button/ec-button.component";
import {ConfirmationDialogModel} from "../../../shared/models/confirmation-dialog.model";
import {DialogService} from "../../../shared/services/dialog.service";
import {DialogModel} from "../../../shared/models/dialog-model";
import {
  EcCreateProductFormComponent
} from "../../../features/ec-product/components/container/ec-create-product-form/ec-create-product-form.component";
import {PageRequestType} from "../../../shared/models/page-request.type";
import {PageType} from "../../../core/types/page.type";
import {ProductType} from "../../../shared/models/product.type";
import {ProductFacade} from "../../../features/ec-product/services/product.facade";

@Component({
  selector: 'app-ec-products-page',
  standalone: true,
  imports: [CommonModule, EcProductSummaryComponent, MatGridListModule, EcButtonComponent],
  templateUrl: './ec-products-page.component.html',
  styleUrls: ['./ec-products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcProductsPageComponent implements OnInit {

  readonly #productFacade = inject(ProductFacade);
  readonly #dialogService =  inject(DialogService);
  readonly products: Signal<PageType<ProductType[]> | undefined>   = this.#productFacade.selectPageProductsSignal();

  ngOnInit(): void {
    this.dispatchGetProducts();
  }

  openAddProductModal() {
    const dialogModel: DialogModel = {
      data: ''
    };
    this.#dialogService.openDialog<EcCreateProductFormComponent, DialogModel>(EcCreateProductFormComponent, dialogModel);
  }

  onDeleteProduct(productId: number): void {
    const confirmationDialogModel: ConfirmationDialogModel = {
      title: 'Delete product',
      message: 'Are you sure to delete this product ?',
      agreeButtonLabel: 'Yes',
      notAgreeButtonLabel: 'No',
      agreeButtonFunction: () => {
        this.#productFacade.dispatchDeleteProduct(productId);
      }
    };
    this.#dialogService.openConfirmationDialog(confirmationDialogModel);
  }

  private dispatchGetProducts(): void {
    const pageRequestType: PageRequestType = {
      page: 0,
      size: 10,
      sortBy: "price"
    };
    this.#productFacade.dispatchGetPageProducts(pageRequestType);
  }

}
