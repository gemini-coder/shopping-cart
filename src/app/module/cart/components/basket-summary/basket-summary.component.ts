import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {CartItem} from '../../interfaces/cart';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'cart-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {

  public subTotal: number = 0
  public grandTotal: number = 0;
  public discounts: number = 0
  public cartItems: number = 0

  private _unSub: Subject<any>;

  constructor(
    private cartService: CartService
  ) {
    this._unSub = new Subject();
    this.cartService.cart$.pipe(takeUntil(this._unSub)).subscribe(c => {
      this.cartItems = c.items.length;
      const totals = this.calculateTotals(c.items)
      this.subTotal = totals.subTotal
      this.grandTotal = totals.grandTotal
      this.discounts = totals.discounts
    })
  }

  calculateTotals(cartItems: CartItem[]){
    let subTotal = 0
    let discounts = 0
    let grandTotal = 0
    cartItems.map(ci => {
      const discount = (ci.product.price * (ci.product.discountPercentage / 100));
      subTotal = subTotal + ci.unitPrice
      discounts = discounts + ci.discountAmount
      grandTotal = subTotal - discounts
    })
    return {subTotal: subTotal, discounts: discounts, grandTotal: grandTotal};
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._unSub.next(null);
    this._unSub.unsubscribe();
  }

}
