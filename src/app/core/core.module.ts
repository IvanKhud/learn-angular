import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ItemHoverDirective } from './directives/item-hover.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
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
    CartItemComponent,
    ItemHoverDirective,
  ]
})
export class CoreModule {}
