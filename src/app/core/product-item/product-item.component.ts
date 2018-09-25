import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;

  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
  ) {}

  public onBuy(): void {
    console.log('You bought ' + this.product.name);
    this.addToCart.emit(this.product);
  }

}
