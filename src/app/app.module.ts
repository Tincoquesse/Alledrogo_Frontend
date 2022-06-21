import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AlledrogoProductsModule} from "./alledrogo-products/alledrogo-products.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlledrogoProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
