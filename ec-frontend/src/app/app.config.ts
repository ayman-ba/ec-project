import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {appRoutes} from './app.routes';
import {provideState, provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {productFeatureKey, productReducer} from "./features/components/ec-product/store/product.reducer";
import {provideHttpClient} from "@angular/common/http";
import * as productEffects from "./features/components/ec-product/store/product.effects";
import {provideEffects} from "@ngrx/effects";
import { provideAnimations } from '@angular/platform-browser/animations';

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
    provideAnimations()
]
};
