import { Component } from '@angular/core';

import { Product } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  cartList: Array<Product> = [];

  onAddToCart(product: Product): void {
    this.cartList.push(product);
  }
}
