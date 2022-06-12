import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Product} from '../../interfaces/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public products!: Product[];

  private _unSub: Subject<any>;
  constructor(
    private productService: ProductService
  ) {
    this._unSub = new Subject();
    this.productService.getProducts().pipe(takeUntil(this._unSub)).subscribe(p => {
      this.products = p
    })
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
