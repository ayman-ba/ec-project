import {inject, Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectDatalistMap} from "../../store/datalist.feature";
import {DatalistType} from "../../types/datalist.type";
import {datalistActions} from "../../store/datalist.action";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DatalistFacade {

  readonly #store = inject(Store);

  dispatchGetDatalist(name: string): void {
    this.#store.dispatch(datalistActions.getDatalist({name}))
  }

  selectDatalistMap(): Observable<Map<string, DatalistType<any>[]>> {
    return this.#store.select(selectDatalistMap);
  }

}
