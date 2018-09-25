import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/models/product.model';

import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartList: Array<Product>;

  constructor(private cartService: CartService) { }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getNumberOfItems(): number {
    return this.cartService.getNumberOfItems();
  }

  ngOnInit() {
    this.cartList = this.cartService.getCartList();
  }

}
