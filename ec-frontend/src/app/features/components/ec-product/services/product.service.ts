import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductRequestModel} from "../models/product-request.model";
import {ProductModel} from "../../../../shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) {
  }

  save(productRequest: ProductRequestModel): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>('/api/v1/products', {productRequest});
  }
}
