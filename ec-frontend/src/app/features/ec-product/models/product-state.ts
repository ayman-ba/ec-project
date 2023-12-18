import {PageType} from "../../../core/types/page.type";
import {ProductType} from "../../../shared/models/product.type";

export interface ProductState {
  isSubmitting: boolean;
  pageProducts: PageType<ProductType[]> | undefined;
}
