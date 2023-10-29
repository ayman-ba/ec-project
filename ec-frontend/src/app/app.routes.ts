import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./features/components/ec-product/ec-product.routes').then(m => m.ecProductRoutes)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/ec-product-pages/ec-products-page/ec-products-page.routes').then(m => m.ecProductsPageRoutes)
  }
];
