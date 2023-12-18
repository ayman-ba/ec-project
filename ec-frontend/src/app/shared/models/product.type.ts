import {IdentifiableType} from "../../core/types/Identifiable.type";

export type ProductType = {
  name: string;
  price: number;
  category: string;
  description: string;
} & IdentifiableType<number>;
