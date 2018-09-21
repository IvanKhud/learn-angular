import { Injectable } from '@angular/core';

import { Product } from '../product/product.model';

@Injectable()
export class CartService {

    private cartList: Array<Product>;

    constructor() {}

    addToCart(product: Product): void {
        this.cartList.push(product);
    }

    getCartList(): Array<Product> {
        return this.cartList;
    }
}
