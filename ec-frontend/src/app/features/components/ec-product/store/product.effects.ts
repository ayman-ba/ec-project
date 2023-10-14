import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {ProductService} from "../services/product.service";
import {productActions} from "./product.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {ProductModel} from "../../../../shared/models/product.model";

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
)

// export const displayErrorAlert = createEffect(
//   () => {
//     return inject(Actions).pipe(
//       ofType(productActions.saveProduct),
//       tap(() => console.log('dddddddddddddd'))
//     );
//   },
//   { functional: true, dispatch: false }
// );

// switchMap(({productRequest}) => {
//   return productService.save(productRequest).pipe(
//     map((product: ProductModel) => {
//       return productActions.saveProductSuccess({product})
//     })
//   )
// })

// switchMap(({productRequest}) => {
//   return productService.save(productRequest).pipe(
//     map((product: ProductModel) => {
//       return productActions.saveSuccess({product})
//     })
//   )
//
// })

// catchError(() => {
//   return of(productActions.saveFailed());
// })