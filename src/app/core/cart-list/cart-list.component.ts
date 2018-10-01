import { Component, OnInit } from '@angular/core';

import { CartItem } from '../../shared/models/product.model';

import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartList: Array<CartItem>;

  constructor(private cartService: CartService) { }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getNumberOfItems(): number {
    return this.cartService.getNumberOfItems();
  }

  changeQuantity(change: any): void {
    this.cartService.changeQuantity(change.id, change.quantity);
  }

  deleteItem(id: string): void {
    this.cartService.deleteItem(id);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartList = this.cartService.getCartList();
  }

  ngOnInit() {
    this.cartList = this.cartService.getCartList();
  }

}
