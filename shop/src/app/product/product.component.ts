import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;

  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
  ) {}

  public onBuy(): void {
    console.log('You bought ' + this.product.name);
    this.addToCart.emit(this.product);
  }

}
