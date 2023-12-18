import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {ProductService} from "../services/product.service";
import {productActions} from "./product.actions";
import {map, switchMap} from "rxjs";
import {ProductType} from "../../../shared/models/product.type";
import {PageType} from "../../../core/types/page.type";

export const saveProductEffect = createEffect(
  (actions$ = inject(Actions),
   productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.saveProduct),
      switchMap(({productRequest}) => {
        return productService.save(productRequest)
          .pipe(map((product: ProductType) => productActions.saveProductSuccess({product}))
          )
      })
    )
  },
  {functional: true}
);

export const getProductsEffect = createEffect(
  (actions$ = inject(Actions),
   productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.getPageProducts),
      switchMap(({pageRequestType}) => {
        return productService.getPage(pageRequestType).pipe(
          map((pageProducts: PageType<ProductType[]>) => {
            return productActions.getPageProductsSuccess({pageProducts})
          })
        )
      })
    )
  },
  {functional: true}
);

export const deleteProductEffect = createEffect(
  (actions$ = inject(Actions),
   productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.deleteProduct),
      switchMap(({id}) => {
        return productService.delete(id).pipe(
          map(() => productActions.deleteProductSuccess({id}))
        )
      })
    )
  },
  {functional: true}
);
