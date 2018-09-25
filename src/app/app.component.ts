import { Component } from '@angular/core';

import { CartService } from './shared/services/cart.service';

import { Product } from './shared/models/product.model';

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
