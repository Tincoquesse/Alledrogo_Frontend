import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketCardComponent} from "./components/basket-card/basket-card.component";
import {BasketProductListComponent} from "./components/basket-product-list/basket-product-list.component";
import {AlledrogoBasketPageComponent} from './pages/alledrogo-basket-page/alledrogo-basket-page.component';
import {FormsModule} from "@angular/forms";
import {SumPipe} from './pipes/sum.pipe';


@NgModule({
  declarations: [
    AlledrogoBasketPageComponent,
    BasketProductListComponent,
    BasketCardComponent,
    SumPipe
  ],
    imports: [
        CommonModule,
        FormsModule,
    ],
  exports: [AlledrogoBasketPageComponent]
})
export class AlledrogoBasketModule { }
