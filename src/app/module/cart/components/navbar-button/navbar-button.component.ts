import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subject, takeUntil} from 'rxjs';
import {CartService} from '../../services/cart.service';
import {BasketQuickViewComponent} from '../basket-quick-view/basket-quick-view.component';

@Component({
  selector: 'cart-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent implements OnInit {

  public cartTotal: number = 0
  public cartCount: number = 0

  private _unSub: Subject<any>;

  constructor(
    private cartService: CartService,
    private modal: NgbModal
  ) {
    this._unSub = new Subject();
    this.cartService.cart$.pipe(takeUntil(this._unSub)).subscribe(c => {
      this.cartTotal = this.cartService.cartValue
      this.cartCount = c.items.length
    })
  }

  openBasket() {
    this.modal.open(BasketQuickViewComponent)
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
