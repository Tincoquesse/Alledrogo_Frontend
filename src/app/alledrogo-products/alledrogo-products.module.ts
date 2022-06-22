import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlledrogoProductsPageComponent } from './pages/alledrogo-products-page/alledrogo-products-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { BasketProductListComponent } from './components/basket-product-list/basket-product-list.component';
import { BasketCardComponent } from './components/basket-card/basket-card.component';



@NgModule({
  declarations: [
    AlledrogoProductsPageComponent,
    ProductCardComponent,
    ProductsListComponent,
    BasketProductListComponent,
    BasketCardComponent
  ],
  exports: [
    AlledrogoProductsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlledrogoProductsModule { }
