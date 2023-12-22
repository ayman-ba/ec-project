import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DatalistType} from "../../types/datalist.type";


@Injectable(
  {
    providedIn: "root"
  }
)
export class DatalistService {

  readonly #httpClient = inject(HttpClient);

  getDatalist(name: string): Observable<DatalistType<any>[]> {
    return this.#httpClient.get<DatalistType<any>[]>(`/api/v1/datalist/${name}`);
  }
}
