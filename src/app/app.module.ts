import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AlledrogoProductsModule} from "./alledrogo-products/alledrogo-products.module";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {AlledrogoBasketModule} from "./alledrogo-basket/alledrogo-basket.module";



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlledrogoProductsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AlledrogoBasketModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
