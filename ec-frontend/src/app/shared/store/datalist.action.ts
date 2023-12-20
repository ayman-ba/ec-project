import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {DatalistType} from "../types/datalist.type";

export const datalistActions = createActionGroup({
  source: 'Datalist',
  events: {
    getDatalist: props<{ name: string }>(),
    getDatalistSuccess: props<{ name: string, datalist: DatalistType[] }>(),
    getDatalistFailed: emptyProps()
  }
})
