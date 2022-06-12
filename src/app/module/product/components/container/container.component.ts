import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {Product} from '../../interfaces/product';

@Component({
  selector: 'product-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {

  @Input('product') product!: Product

  constructor() { }

  ngOnInit(): void {
  }

}
