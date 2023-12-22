import {DatalistType} from "../types/datalist.type";
import {OptionType} from "../../core/types/option.type";

function transformToOptions<T>(datalistItems: DatalistType<T>[]): OptionType<T>[] {
  const items = datalistItems ?? [];
  return items.map((item: DatalistType<T>): OptionType<T> => {
    const {code, label} = item;
    return {
      value: code,
      label
    }
  })
}

export const datalistTransformer = {
  transformToOptions
}
