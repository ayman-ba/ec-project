import {ProductModel} from "../../../shared/models/product.model";

export interface ProductState {
  isSubmitting: boolean;
  products: ProductModel[];
}
