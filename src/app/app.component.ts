import {Component, OnInit} from '@angular/core';
import {RoutesConfig} from "./app-routing.module";
import {AlledrogoService} from "./api/service/alledrogo.service";
import {Product} from "./api/model/product";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Alledrogo';


  constructor() {
  }

  routes: { label: string, route: string }[] = [
    {
      label: 'Products',
      route: RoutesConfig.productsPage,
    },
    {
      label: 'Basket',
      route: RoutesConfig.basketPage,
    }
    ];

}

