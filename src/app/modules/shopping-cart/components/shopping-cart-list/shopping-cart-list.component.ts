import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  shoppingCartList: any[];
  totalPrice: string;
  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {
    this.shoppingCartList = [];
    this.totalPrice = "";
  }
  ngOnInit(): void {
    this.shoppingCartService.showShoppingCart().subscribe(data => {
      this.shoppingCartList = [...this.shoppingCartList, data];
      console.log(data);
    })
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.shoppingCartList.reduce((previousValue, tire) => previousValue + tire.price, 0)
    console.log(this.totalPrice);
  }

  redirectToPayout() {
    this.router.navigateByUrl("/payout");
  }
}
