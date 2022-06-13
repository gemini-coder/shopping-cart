import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ContainerComponent } from './components/container/container.component';
import {CartModule} from '../cart/cart.module';
import {PipesModule} from '../../core/pipes/pipes.module';


@NgModule({
  declarations: [
    ListComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    CartModule,
    PipesModule
  ],
  exports: [
    ListComponent
  ]
})
export class ProductModule { }
