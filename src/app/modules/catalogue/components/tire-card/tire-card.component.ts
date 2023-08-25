import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-tire-card',
  templateUrl: './tire-card.component.html',
  styleUrls: ['./tire-card.component.css']
})
export class TireCardComponent {
  @Input() tire: any;
  isSelected: boolean;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.tire = {};
    this.isSelected = false;
  }

  selectTire() {
    this.isSelected = true;
    this.addToShoppingCart();
  }

  actions(events: boolean) {
    switch (events) {
      case false:
        this.isSelected = false;
        break;
    }
  }

  addToShoppingCart() {
    this.shoppingCartService.addToShoppingCart(this.tire);
    this.shoppingCartService.showShoppingCart().subscribe(data => {
      console.log(data);
    });
  }

}
