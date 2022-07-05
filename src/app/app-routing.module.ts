import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  AlledrogoProductsPageComponent
} from "./alledrogo-products/pages/alledrogo-products-page/alledrogo-products-page.component";
import {
  AlledrogoBasketPageComponent
} from "./alledrogo-basket/pages/alledrogo-basket-page/alledrogo-basket-page.component";
import {AlledrogoLoginPageComponent} from "./alledrogo-login/pages/alledrogo-login-page/alledrogo-login-page.component";
import {
  AlledrogoRegisterPageComponent
} from "./alledrogo-register/pages/alledrogo-register-page/alledrogo-register-page.component";
import {AuthGuard} from "./auth/services/auth.guard";

export const enum RoutesConfig {
  // home= 'home',
  registerPage = 'alledrogo-register',
  loginPage = 'alledrogo-login',
  productsPage = 'alledrogo-products',
  basketPage = 'alledrogo-basket'
}

const routes: Routes = [

  {
    path: RoutesConfig.loginPage,
    component: AlledrogoLoginPageComponent,
  },
  {
    path: RoutesConfig.productsPage,
    component: AlledrogoProductsPageComponent
  },
  {
    path: RoutesConfig.registerPage,
    component: AlledrogoRegisterPageComponent
  },
  {
    path: RoutesConfig.basketPage,
    component: AlledrogoBasketPageComponent,
    canActivate: [AuthGuard]
  },
  {path: '', redirectTo: RoutesConfig.productsPage, pathMatch: 'full'},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
