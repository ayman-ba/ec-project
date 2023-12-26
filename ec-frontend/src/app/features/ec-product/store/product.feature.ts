import {createFeature, createReducer, on} from "@ngrx/store";
import {productActions} from "./product.actions";
import {ProductType} from "../../../shared/models/product.type";
import {PageType} from "../../../core/types/page.type";

type ProductState = {
  isSubmitting: boolean;
  pageProducts: PageType<ProductType> | null;
}

const initialState: ProductState = {
  isSubmitting: false,
  pageProducts: null
}
export const productFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(productActions.saveProduct, (state) => ({...state, isSubmitting: true})),
    on(productActions.getPageProducts, (state) => ({...state, products: []})),
    on(productActions.getPageProductsSuccess, (state, action) => ({...state, pageProducts: action.pageProducts})),
    on(productActions.deleteProductSuccess, (state, {id}) => ({
      ...state,
      pageProducts: updatePageProductsOnDelete(state, id)
    }))
  )
});

const updatePageProductsOnDelete = (state: ProductState, id: number): PageType<ProductType> => (

  {
    ...state.pageProducts,
    elements: state.pageProducts?.elements?.filter(item => item.id !== id) ?? [],
    totalSizes: 0,
    totalPages: 0
  }
);

export const {
  name,
  reducer: productReducer,
  selectIsSubmitting,
  selectPageProducts
} = productFeature;
