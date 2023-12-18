import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {ProductRequestModel} from "../models/product-request.model";
import {PageRequestType} from "../../../shared/models/page-request.type";
import {ProductType} from "../../../shared/models/product.type";
import {PageType} from "../../../core/types/page.type";

export const productActions = createActionGroup({
    source: 'Product',
    events: {
      saveProduct: props<{ productRequest: ProductRequestModel }>(),
      saveProductSuccess: props<{ product: ProductType }>(),
      saveProductFailed: emptyProps(),
      getPageProducts: props<{pageRequestType: PageRequestType}>(),
      getPageProductsSuccess: props<{ pageProducts: PageType<ProductType[]> }>(),
      deleteProduct: props<{ id: number }>(),
      deleteProductSuccess: props<{ id: number }>()
    }
  }
);
