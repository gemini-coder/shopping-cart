import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullWidthModule} from './full-width/full-width.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FullWidthModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
