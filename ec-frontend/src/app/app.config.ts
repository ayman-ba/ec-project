import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {appRoutes} from './app.routes';
import {provideState, provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {productFeatureKey, productReducer} from "./features/ec-product/store/product.reducer";
import {provideHttpClient} from "@angular/common/http";
import * as productEffects from "./features/ec-product/store/product.effects";
import {provideEffects} from "@ngrx/effects";
import {provideAnimations} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
    provideState(productFeatureKey, productReducer),
    provideEffects(productEffects),
    provideAnimations(),
    importProvidersFrom(MatDialogModule),
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
};
