import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  EcProductSummaryComponent
} from "../../../features/ec-product/components/ec-product-summary/ec-product-summary.component";
import {selectPageProducts} from "../../../features/ec-product/store/product.feature";
import {Store} from "@ngrx/store";
import {productActions} from "../../../features/ec-product/store/product.actions";
import {map, Observable} from "rxjs";
import {MatGridListModule} from "@angular/material/grid-list";
import {EcButtonComponent} from "../../../shared/components/ec-button/ec-button.component";
import {ConfirmationDialogModel} from "../../../shared/models/confirmation-dialog.model";
import {DialogService} from "../../../shared/services/dialog.service";
import {DialogModel} from "../../../shared/models/dialog-model";
import {
  EcCreateProductFormComponent
} from "../../../features/ec-product/components/ec-create-product-form/ec-create-product-form.component";
import {PageRequestType} from "../../../shared/models/page-request.type";
import {PageType} from "../../../core/types/page.type";
import {ProductType} from "../../../shared/models/product.type";
import {datalistActions} from "../../../shared/store/datalist.action";
import {DatalistType} from "../../../shared/types/datalist.type";
import {OptionType} from "../../../core/types/option.type";

@Component({
  selector: 'app-ec-products-page',
  standalone: true,
  imports: [CommonModule, EcProductSummaryComponent, MatGridListModule, EcButtonComponent],
  templateUrl: './ec-products-page.component.html',
  styleUrls: ['./ec-products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcProductsPageComponent implements OnInit {

  products$: Observable<PageType<ProductType[]> | undefined> = this.store.select(selectPageProducts);


  constructor(private readonly store: Store,
              private readonly dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.dispatchGetProducts();
  }

  openAddProductModal() {
    const dialogModel: DialogModel = {
      data: ''
    };
    this.dialogService.openDialog<EcCreateProductFormComponent, DialogModel>(EcCreateProductFormComponent, dialogModel);
  }

  onDeleteProduct(productId: number): void {
    const confirmationDialogModel: ConfirmationDialogModel = {
      title: 'Delete product',
      message: 'Are you sure to delete this product ?',
      agreeButtonLabel: 'Yes',
      notAgreeButtonLabel: 'No',
      agreeButtonFunction: () => {
        this.store.dispatch(productActions.deleteProduct({
          id: productId
        }));
      },
      notAgreeButtonFunction: () => {
      }
    };
    this.dialogService.openConfirmationDialog(confirmationDialogModel);
  }

  private dispatchGetProducts(): void {
    const pageRequestType: PageRequestType = {
      page: 0,
      size: 10,
      sortBy: "price"
    };
    this.store.dispatch(productActions.getPageProducts({pageRequestType}));
  }

}
