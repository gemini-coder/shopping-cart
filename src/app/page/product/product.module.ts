import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductListPageComponent} from './product-list-page/product-list-page.component';
import {ProductModule} from '../../module/product/product.module';
import {CartModule} from '../../module/cart/cart.module';


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
