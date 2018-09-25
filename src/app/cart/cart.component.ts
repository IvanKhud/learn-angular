import { Component, Input } from '@angular/core';

import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartList: Array<Product>;

  constructor() { }

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
