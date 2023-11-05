import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./pages/ec-product-pages/ec-products-page/ec-products-page.routes').then(m => m.ecProductsPageRoutes)
  }
];
