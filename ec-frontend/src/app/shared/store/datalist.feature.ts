import {DatalistType} from "../types/datalist.type";
import {createFeature, createReducer, on} from "@ngrx/store";
import {datalistActions} from "./datalist.action";

type DatalistState = {
  datalistMap: Map<string, DatalistType<any>[]>;
}

const initialState: DatalistState = {
  datalistMap: new Map<string, DatalistType<any>[]>
}

const datalistReducer = createReducer(
  initialState,
  on(datalistActions.getDatalistSuccess,
    (state: DatalistState, action: { name: string, datalist: DatalistType<any>[] }) =>
      (
        {
          ...state,
          datalistMap: new Map(state.datalistMap.set(action.name, action.datalist))
        }
      )
  )
);

export const datalistFeature = createFeature({
  name: 'DatalistFeatureKey',
  reducer: datalistReducer
})

export const {
  name,
  reducer,
  selectDatalistMap,
} = datalistFeature;
