import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../product/product.model';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
