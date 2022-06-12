import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthComponent } from './full-width.component';
import {TopNavModule} from '../components/top-nav/top-nav.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    FullWidthComponent
  ],
  imports: [
    CommonModule,
    TopNavModule,
    RouterModule
  ],
  exports: [
    FullWidthComponent
  ]
})
export class FullWidthModule { }
