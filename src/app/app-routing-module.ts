import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { ProductListComponent } from './core/product-list/product-list.component';
import { CartListComponent } from './core/cart-list/cart-list.component';

const routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'cart',
        component: CartListComponent
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}