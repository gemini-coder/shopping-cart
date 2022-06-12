import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Observable, Subject} from 'rxjs';
import {Product} from '../../product/interfaces/product';
import {Cart} from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Cart;

  public cart$: Subject<Cart>;

  constructor(
    private toast: ToastrService
  ) {
    this._cart = {
      items:[]
    };
    this.cart$ = new Subject();
    this._cart = JSON.parse(localStorage.getItem('cart') ?? '{"items": []}');
    this.setCart()
  }

  public get cart() : Observable<Cart> {
    return this.cart$.asObservable();
  }

  setCart() : void {
    localStorage.setItem('cart', JSON.stringify(this._cart));
    this.cart$.next(this._cart);
  }

  public get cartValue() : number {
    let total = 0
    this._cart?.items?.map(i => {
      total = total + i.product.price
    })
    return total;
  }

  refreshCart() : void {
    this.cart$.next(this._cart)
  }

  addToCart(product: Product) : void {
    this._cart.items.push({
      product: product,
      unitPrice: product.price,
      discountPercentage: product.discountPercentage,
      discountAmount: product.price * (product.discountPercentage / 100),
      lineAfterDiscounts: product.price - (product.price * (product.discountPercentage / 100))
    });
    this.setCart()
    this.toast.success(
      `Added ${product.title}`,
      `Cart total: £${this.cartValue.toFixed(2)}`)
    this.setCart()
  }

  removeFromCart(index: number) : void {
    this._cart.items.splice(index, 1)
    this.setCart()
    this.toast.warning(
      'Item removed from cart',
      `Cart total: £${this.cartValue.toFixed(2)}`
    )
  }


}
