import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product;
  @Input() quantity: number;
  @Output() changeQuantity: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onQuantityChange(changeObject: any) {
    this.changeQuantity.emit(changeObject);
  }

}
