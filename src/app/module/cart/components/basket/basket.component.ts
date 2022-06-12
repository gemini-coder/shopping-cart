import { Component, OnInit } from '@angular/core';
import {Subject, take, takeUntil} from 'rxjs';
import {Cart, CartItem} from '../../interfaces/cart';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'cart-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public basketItems: CartItem[] = [];

  public get total(): number{
    let t = 0
    this.basketItems.map(bi => {
      t = t + bi.product.price
    })
    return t
  }

  private _unSub: Subject<any>
  ;
  constructor(
    private cartService: CartService
  ) {
    this._unSub = new Subject();
    this.cartService.cart.pipe(takeUntil(this._unSub)).subscribe(c => {
      this.basketItems = c.items
    })
  }

  removeItem(i : number){
    this.cartService.removeFromCart(i);
  }

  ngOnInit(): void {
    this.cartService.refreshCart()

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._unSub.next(null);
    this._unSub.unsubscribe();
  }

}
