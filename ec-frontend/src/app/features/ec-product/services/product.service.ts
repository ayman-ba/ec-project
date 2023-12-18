import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductRequestModel} from "../models/product-request.model";
import {ProductType} from "../../../shared/models/product.type";
import {PageRequestType} from "../../../shared/models/page-request.type";
import {PageType} from "../../../core/types/page.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) {
  }

  save(productRequest: ProductRequestModel): Observable<ProductType> {
    console.log(productRequest)
    return this.httpClient.post<ProductType>('/api/v1/products', productRequest);
  }

  getPage(pageRequestType: PageRequestType): Observable<PageType<ProductType[]>> {
    return this.httpClient.get<PageType<ProductType[]>>(`/api/v1/products?page=${pageRequestType.page}&size=${pageRequestType.size}&sortBy=${pageRequestType.sortBy}`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>('/api/v1/products/' + id);
  }
}
