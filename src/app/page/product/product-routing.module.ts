import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListPageComponent} from './product-list-page/product-list-page.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListPageComponent
  },
  {
    path: '**',
    redirectTo: '/product/list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
