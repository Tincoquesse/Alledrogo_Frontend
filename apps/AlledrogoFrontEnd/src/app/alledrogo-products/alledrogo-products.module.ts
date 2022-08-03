import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlledrogoProductsPageComponent } from './pages/alledrogo-products-page/alledrogo-products-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';




@NgModule({
  declarations: [
    AlledrogoProductsPageComponent,
    ProductCardComponent,
    ProductsListComponent,

  ],
  exports: [
    AlledrogoProductsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlledrogoProductsModule { }
