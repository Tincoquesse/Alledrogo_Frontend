import {Component} from '@angular/core';
import {RoutesConfig} from "./app-routing.module";

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
    },
    {
      label: 'Login',
      route: RoutesConfig.loginPage
    }
    ];

}

