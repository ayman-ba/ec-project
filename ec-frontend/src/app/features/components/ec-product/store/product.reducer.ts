import {createFeature, createReducer, on} from "@ngrx/store";
import {ProductState} from "../models/product-state";
import {productActions} from "./product.actions";

const initialState: ProductState = {
  isSubmitting: false
}
const productFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(productActions.saveProduct, (state) => ({...state, isSubmitting: true}))
  )
});

export const {
  name: productFeatureKey,
  reducer: productReducer, selectIsSubmitting
} = productFeature;
