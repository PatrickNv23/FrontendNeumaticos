
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TiresService } from 'src/app/services/api/tires.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-modal-tire-card',
  templateUrl: './modal-tire-card.component.html',
  styleUrls: ['./modal-tire-card.component.css']
})
export class ModalTireCardComponent implements OnInit {
  @Input() selectedId: any;
  @Output() action = new EventEmitter();
  quantity: any;
  isOpen: boolean = false;
  isClose: boolean = false;
  selectedTire: any;
  constructor(private router: Router, private tiresService: TiresService, private shoppingCartService: ShoppingCartService) {
    this.quantity = 1;
    this.selectedTire = {}
  }
  ngOnInit(): void {
    this.tiresService.getTireById(this.selectedId).subscribe(data => {
      this.selectedTire = data;
      console.log(this.selectedTire)
    });
    this.isOpen = true;

  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity <= 1) {
      this.quantity = 1;
    } else {
      this.quantity--;
    }
  }

  redirectToShoppingCart() {
    this.router.navigateByUrl("/shoppingCart");
  }



}
