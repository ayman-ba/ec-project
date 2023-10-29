import {Identifiable} from "../../core/Identifiable";

export interface ProductModel extends Identifiable<number> {
  name: string;
  price: number;
  category: string;
  description: string;
}
