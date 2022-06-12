import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import {CartModule} from 'src/app/module/cart/cart.module';


@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    CartModule
  ]
})
export class CartPageModule { }
