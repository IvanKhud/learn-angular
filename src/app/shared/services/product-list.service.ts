import { Injectable } from '@angular/core';
import { GeneratorService } from './generator.service';

import {
  Category,
  Product,
} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private generatorService: GeneratorService) { }

  getList(): Array<Product> {
    return [
      new Product('first product', 'some description', 2, Category.Electronics, true, this.generatorService.generate()),
      new Product('second product', 'some description', 3, Category.Toys, false, this.generatorService.generate()),
      new Product('third product', 'some description', 1, Category.Clothing, true, this.generatorService.generate()),
      new Product('fourth product', 'some description', 5, Category.Toys, true, this.generatorService.generate()),
      new Product('fifth product', 'some description', 4, Category.Clothing, true, this.generatorService.generate()),
    ];
  }

}
