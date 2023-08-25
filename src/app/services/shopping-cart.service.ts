import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: any[];

  constructor() {
    this.shoppingCart = [];
  }


  addToShoppingCart(item: any) {
    this.shoppingCart = [...this.shoppingCart, item];
  }

  showShoppingCart(): Observable<any> {
    return from(this.shoppingCart);
  }

  clearShoppingCart() {
    this.shoppingCart = [];
  }
}
