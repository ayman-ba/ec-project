import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DatalistType} from "../types/datalist.type";


@Injectable(
  {
    providedIn: "root"
  }
)
export class DatalistService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getDatalist(name: string): Observable<DatalistType[]> {
    return this.httpClient.get<DatalistType[]>(`/api/v1/datalist/${name}`);
  }
}
