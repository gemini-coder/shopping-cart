import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { BasketComponent } from './components/basket/basket.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { BasketQuickViewComponent } from './components/basket-quick-view/basket-quick-view.component';
import { NavbarButtonComponent } from './components/navbar-button/navbar-button.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PipesModule} from '../../core/pipes/pipes.module';



@NgModule({
  declarations: [
    AddButtonComponent,
    BasketComponent,
    BasketSummaryComponent,
    BasketQuickViewComponent,
    NavbarButtonComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    AddButtonComponent,
    BasketComponent,
    BasketSummaryComponent,
    NavbarButtonComponent
  ]
})
export class CartModule { }
