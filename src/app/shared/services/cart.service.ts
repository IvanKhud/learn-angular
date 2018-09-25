import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList = [] as Array<Product>;

  constructor() { }

  addToCart(product: Product): void {
    this.cartList.push(product);
  }

  getCartList(): Array<Product> {
    return this.cartList;
  }

  getTotalPrice(): number {
    return this.cartList ?
      this.cartList.reduce((result, item) => {
        return result + item.price;
      }, 0)
      :
      0;
  }

  getNumberOfItems(): number {
    return this.cartList ? this.cartList.length : 0;
  }
}
