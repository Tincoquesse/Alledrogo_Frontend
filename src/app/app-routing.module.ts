import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  AlledrogoProductsPageComponent
} from "./alledrogo-products/pages/alledrogo-products-page/alledrogo-products-page.component";
import {
  AlledrogoBasketPageComponent
} from "./alledrogo-basket/pages/alledrogo-basket-page/alledrogo-basket-page.component";

export const enum RoutesConfig {
  // home= 'home',
  productsPage = 'alledrogo-products',
  basketPage = 'alledrogo-basket'
}

const routes: Routes = [
  // {path: RoutesConfig.home, component: HomePageComponent},
  {path: RoutesConfig.productsPage, component: AlledrogoProductsPageComponent},
  {path: RoutesConfig.basketPage, component: AlledrogoBasketPageComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: AlledrogoProductsPageComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
