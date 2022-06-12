import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {CartItem} from 'src/app/module/cart/interfaces/cart';
import {CartService} from 'src/app/module/cart/services/cart.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {

  }

}
