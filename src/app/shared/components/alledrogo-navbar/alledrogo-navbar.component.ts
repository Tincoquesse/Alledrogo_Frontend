import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../api/model/product";
import {map} from "rxjs";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-alledrogo-navbar',
  templateUrl: './alledrogo-navbar.component.html',
  styleUrls: ['./alledrogo-navbar.component.css']
})
export class AlledrogoNavbarComponent implements OnInit {


  @Input() routes: { label: string, route: string }[] = [];

  products: Product[] = [];

  constructor(public service: AlledrogoService, private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  getAll(): void {
    this.service.getProductsFromBasket().pipe(
      map(data => data as Product[])
    ).subscribe(results => {
      this.products = results
    });
  }

  ngOnInit() {
    if (this.tokenStorage.tokenIsPresent()) {
      this.getAll();
      this.service.updateCounter();
    }
    return
  }

  viewCard() {
    this.router.navigateByUrl(RoutesConfig.basketPage);
  }
}
