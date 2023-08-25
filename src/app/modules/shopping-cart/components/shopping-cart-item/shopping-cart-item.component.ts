import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {

  @Input() item: any;
  quantity: number;

  constructor() {
    this.item = {};
    this.quantity = 1;
  }

  decrementQuantity() {
    this.quantity--;
  }

  incrementQuantity() {
    this.quantity++;
  }

}
