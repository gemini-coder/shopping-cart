import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  getProducts() : Observable<Product[]> {
    return this._http.get<Product[]>('api/products').pipe(
      (response) => {
        return response;
      },
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }
}
