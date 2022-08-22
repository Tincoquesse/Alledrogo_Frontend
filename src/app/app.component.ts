import {Component, OnInit} from '@angular/core';
import {RoutesConfig} from "./app-routing.module";
import {AlledrogoService} from "./api/service/alledrogo.service";
import {TokenStorageService} from "./auth/services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Alledrogo';
  routes: { label: string, route: string }[] = [
    {
      label: 'Home',
      route: RoutesConfig.homePage,
    },
    {
      label: 'Products',
      route: RoutesConfig.productsPage,
    },
    {
      label: 'Shopping Cart',
      route: RoutesConfig.basketPage,
    },
    {
      label: 'Login',
      route: RoutesConfig.loginPage
    }
  ];

  constructor(private service: AlledrogoService, private tokenService: TokenStorageService) {
  }

  ngOnInit(): void {
    if(this.tokenService.isLoggedIn()) {
      this.service.getProductsFromBasket().subscribe();
    }
  }
}

