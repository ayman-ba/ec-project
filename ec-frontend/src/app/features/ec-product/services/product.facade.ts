import {inject, Injectable, Signal} from "@angular/core";
import {Store} from "@ngrx/store";
import {ProductRequestType} from "../models/product-request.type";
import {productActions} from "../store/product.actions";
import {PageRequestType} from "../../../shared/models/page-request.type";
import {selectPageProducts} from "../store/product.feature";
import {PageType} from "../../../core/types/page.type";
import {ProductType} from "../../../shared/models/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  readonly #store = inject(Store);

  dispatchSaveProduct(productRequest: ProductRequestType): void {
    this.#store.dispatch(productActions.saveProduct({productRequest}));
  }

  dispatchGetPageProducts(pageRequestType: PageRequestType) {
    this.#store.dispatch(productActions.getPageProducts({pageRequestType}));
  }

  dispatchDeleteProduct(id: number): void {
    this.#store.dispatch(productActions.deleteProduct({id}));
  }

  selectPageProductsSignal(): Signal<PageType<ProductType[]> | undefined> {
    return this.#store.selectSignal(selectPageProducts);
  }

}
