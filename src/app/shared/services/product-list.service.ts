import { Injectable } from '@angular/core';

import {
  Category,
  Product,
} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  getList(): Array<Product> {
    return [
      new Product('first product', 'some description', 2, Category.Electronics, true),
      new Product('second product', 'some description', 3, Category.Toys, false),
      new Product('third product', 'some description', 1, Category.Clothing, true),
    ];
  }

}
