import { Component, Input, OnInit } from '@angular/core';
import {Product} from 'src/app/module/product/interfaces/product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'cart-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  @Input('product') product!: Product;

  constructor(
    private cartService: CartService
  ) { }

  addToCart(){
    this.cartService.addToCart(this.product)
  }

  ngOnInit(): void {
  }

}
