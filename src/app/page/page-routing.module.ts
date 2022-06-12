import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: '**',
    redirectTo: '/product'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
