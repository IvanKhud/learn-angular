import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ProductListService } from '../../shared/services/product-list.service';

import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  productList: Array<Product>;

  constructor(
    private productListService: ProductListService,
  ) { }

  ngOnInit() {
    this.productList = this.productListService.getList();
  }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }

}
