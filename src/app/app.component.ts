import { Component } from '@angular/core';

import { Product } from './product/product.model';

import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor (private cartService: CartService) {}

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
