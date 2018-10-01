import { Injectable } from '@angular/core';

import { Product, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList = [] as Array<CartItem>;

  constructor() { }

  addToCart(product: Product): void {
    const index = this.cartList.find((item) => {
      return item.product.id === product.id;
    });
    if (index) {
      index.quantity++;
    } else {
      const newItem = {} as CartItem;
      newItem.product = product;
      newItem.quantity = 1;
      this.cartList.push(newItem);
    }
  }

  getCartList(): Array<CartItem> {
    return this.cartList;
  }

  getTotalPrice(): number {
    return this.cartList ?
      this.cartList.reduce((result, item) => {
        return result + item.product.price * item.quantity;
      }, 0)
      :
      0;
  }

  getNumberOfItems(): number {
    return this.cartList ? this.cartList.length : 0;
  }

  changeQuantity(id: string, value: number) {
    if (value > 0) {
      this.cartList.forEach(item => {
        if (item.product.id === id) {
          item.quantity = value;
        }
      });
    } else {
      this.deleteItem(id);
    }
  }

  deleteItem(id: string): void {
    let currentIndex: number;
    this.cartList.forEach((item, index) => {
      if (item.product.id === id) {
        currentIndex = index;
      }
    });
    this.cartList.splice(currentIndex, 1);
  }

  clearCart(): void {
    this.cartList = [];
  }

}
