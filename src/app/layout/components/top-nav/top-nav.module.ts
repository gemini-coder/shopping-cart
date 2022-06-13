import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav.component';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../../../core/pipes/pipes.module';
import {CartModule} from '../../../module/cart/cart.module';



@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    CartModule
  ],
  exports:[
    TopNavComponent
  ]
})
export class TopNavModule { }
