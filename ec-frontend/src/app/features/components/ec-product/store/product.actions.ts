import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {ProductRequestModel} from "../models/product-request.model";
import {ProductModel} from "../../../../shared/models/product.model";

export const productActions = createActionGroup({
    source: 'Product',
    events: {
      saveProduct: props<{ productRequest: ProductRequestModel }>(),
      saveProductSuccess: props<{ product: ProductModel }>(),
      saveProductFailed: emptyProps()
    }
  }
);
