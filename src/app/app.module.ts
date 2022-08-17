import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AlledrogoProductsModule} from "./alledrogo-products/alledrogo-products.module";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {AlledrogoBasketModule} from "./alledrogo-basket/alledrogo-basket.module";
import {AlledrogoLoginModule} from "./alledrogo-login/alledrogo-login.module";
import {JwtModule} from "@auth0/angular-jwt";
import {AlledrogoRegisterModule} from "./alledrogo-register/alledrogo-register.module";
import {AuthModule} from "./auth/auth.module";
import {AuthGuard} from "./auth/services/auth.guard";
import {AlledrogoHomeModule} from "./alledrogo-home/alledrogo-home.module";
import {AlledrogoOrderModule} from "./alledrogo-order/alledrogo-order.module";


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlledrogoProductsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AlledrogoBasketModule,
    AlledrogoLoginModule,
    AlledrogoRegisterModule,
    AuthModule,
    AlledrogoHomeModule,
    AlledrogoOrderModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8080"],
        disallowedRoutes: ["http://localhost:8080/api/login", "http://localhost:8080/shop/product/getAll",
          "http://localhost:8080/api/user/save"],
        throwNoTokenError: true,
      },
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
