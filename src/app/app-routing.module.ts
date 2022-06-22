import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  AlledrogoProductsPageComponent
} from "./alledrogo-products/pages/alledrogo-products-page/alledrogo-products-page.component";

export const enum RoutesConfig {
  // home= 'home',
  productsPage = 'alledrogo-products',
}

const routes: Routes = [
  // {path: RoutesConfig.home, component: HomePageComponent},
  {path: RoutesConfig.productsPage, component: AlledrogoProductsPageComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: AlledrogoProductsPageComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
