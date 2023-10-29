import {createFeature, createReducer, on} from "@ngrx/store";
import {ProductState} from "../models/product-state";
import {productActions} from "./product.actions";

const initialState: ProductState = {
  isSubmitting: false,
  products: []
}
const productFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(productActions.saveProduct, (state) => ({...state, isSubmitting: true})),
    on(productActions.getProducts, (state) => ({...state, products: []})),
    on(productActions.getProductsSuccess, (state, action) => ({...state, products: action.products})),
    on(productActions.deleteProductSuccess, (state, {id}) => ({
      ...state,
      products: state.products.filter(p => p.id !== id)
    }))
  )
});

export const {
  name: productFeatureKey,
  reducer: productReducer, selectIsSubmitting, selectProducts
} = productFeature;
