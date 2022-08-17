import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasketCardComponent} from "./components/basket-card/basket-card.component";
import {BasketProductListComponent} from "./components/basket-product-list/basket-product-list.component";
import { AlledrogoBasketPageComponent } from './pages/alledrogo-basket-page/alledrogo-basket-page.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AlledrogoBasketPageComponent,
    BasketProductListComponent,
    BasketCardComponent
  ],
    imports: [
        CommonModule,
        FormsModule,

    ],
  exports: [AlledrogoBasketPageComponent]
})
export class AlledrogoBasketModule { }
