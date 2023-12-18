import {createFeature, createReducer, on} from "@ngrx/store";
import {ProductState} from "../models/product-state";
import {productActions} from "./product.actions";
import {ProductType} from "../../../shared/models/product.type";

const initialState: ProductState = {
  isSubmitting: false,
  pageProducts: undefined
}
const productFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(productActions.saveProduct, (state) => ({...state, isSubmitting: true})),
    on(productActions.getPageProducts, (state) => ({...state, products: []})),
    on(productActions.getPageProductsSuccess, (state, action) => ({...state, pageProducts: action.pageProducts})),
    on(productActions.deleteProductSuccess, (state, {id}) => ({
      ...state,
      // pageProducts: {
      //   ...state.pageProducts
      //   // elements: state.pageProducts?.elements.filter(p => p.id !== id) as ProductType[]
      // }
    }))
  )
});

export const {
  name: productFeatureKey,
  reducer: productReducer, selectIsSubmitting, selectPageProducts
} = productFeature;
