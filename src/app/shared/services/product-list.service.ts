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
      new Product('first product', 'some description', 2, Category.Electronics, true, '1'),
      new Product('second product', 'some description', 3, Category.Toys, false, '2'),
      new Product('third product', 'some description', 1, Category.Clothing, true, '3'),
    ];
  }

}
