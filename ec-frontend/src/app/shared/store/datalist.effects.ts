import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {map, switchMap} from "rxjs";
import {DatalistService} from "../services/datalist.service";
import {datalistActions} from "./datalist.action";
import {DatalistType} from "../types/datalist.type";

export const getCategoriesEffect = createEffect(
  (actions$ = inject(Actions),
   datalistService = inject(DatalistService)) => {
    return actions$.pipe(
      ofType(datalistActions.getDatalist),
      switchMap(({ name }) => {
        console.log(name)
        return datalistService.getDatalist(name)
          .pipe(map((datalist: DatalistType[]) => {
            console.log(datalist)
            return datalistActions.getDatalistSuccess({name, datalist});
            })
          )
      })
    )
  },
  {functional: true}
);
