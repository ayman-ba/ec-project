import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {ProductService} from "../services/product.service";
import {productActions} from "./product.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {ProductModel} from "../../../shared/models/product.model";

export const saveProductEffect = createEffect(
  (actions$ = inject(Actions),
   productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.saveProduct),
      switchMap(({productRequest}) => {
        return productService.save(productRequest).pipe(
          map((product: ProductModel) => {
            return productActions.saveProductSuccess({product})
          })
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
      ofType(productActions.getProducts),
      switchMap(() => {
        return productService.getAll().pipe(
          map((products: ProductModel[]) => {
            return productActions.getProductsSuccess({products})
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
          map(() => {
            return productActions.deleteProductSuccess({id});
          })
        )
      })
    )
  },
  {functional: true}
);
