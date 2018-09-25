import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    ProductListComponent,
    CartListComponent,
    ProductItemComponent,
    CartItemComponent
  ],
  declarations: [
    ProductListComponent,
    CartListComponent,
    ProductItemComponent,
    CartItemComponent
  ]
})
export class CoreModule {}
