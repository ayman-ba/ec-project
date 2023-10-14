import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./features/components/ec-product/ec-product.routes').then(m => m.ecProductRoutes)
  }
];
