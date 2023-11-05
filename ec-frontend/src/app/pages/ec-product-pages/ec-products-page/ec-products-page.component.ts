import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  EcProductItemComponent
} from "../../../features/ec-product/components/ec-product-item/ec-product-item.component";
import {selectProducts} from "../../../features/ec-product/store/product.reducer";
import {Store} from "@ngrx/store";
import {productActions} from "../../../features/ec-product/store/product.actions";
import {Observable} from "rxjs";
import {ProductModel} from "../../../shared/models/product.model";
import {MatGridListModule} from "@angular/material/grid-list";
import {EcButtonComponent} from "../../../shared/components/ec-button/ec-button.component";
import {ConfirmationDialogModel} from "../../../shared/models/confirmation-dialog.model";
import {DialogService} from "../../../shared/services/dialog.service";
import {DialogModel} from "../../../shared/models/dialog-model";
import {
  EcCreateProductFormComponent
} from "../../../features/ec-product/components/ec-create-product-form/ec-create-product-form.component";

@Component({
  selector: 'app-ec-products-page',
  standalone: true,
  imports: [CommonModule, EcProductItemComponent, MatGridListModule, EcButtonComponent],
  templateUrl: './ec-products-page.component.html',
  styleUrls: ['./ec-products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcProductsPageComponent implements OnInit {

  products$: Observable<ProductModel[]> = this.store.select(selectProducts);

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
    this.store.dispatch(productActions.getProducts());
  }

}
