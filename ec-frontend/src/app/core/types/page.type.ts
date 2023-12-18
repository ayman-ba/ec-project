import { IdentifiableType} from "./Identifiable.type";

export type PageType<T> = {
  totalPages: number;
  totalSizes: number;
  elements: T;
}
