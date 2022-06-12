import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductListPageComponent} from './product-list-page/product-list-page.component';
import {ProductModule} from 'src/app/module/product/product.module';
import {CartModule} from 'src/app/module/cart/cart.module';


@NgModule({
  declarations: [ProductListPageComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductModule,
    CartModule
  ]
})
export class ProductPageModule { }
