import {Component, Input} from '@angular/core';
import {Product} from "../../../api/model/product";
import {Observable} from "rxjs";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-alledrogo-navbar',
  templateUrl: './alledrogo-navbar.component.html',
  styleUrls: ['./alledrogo-navbar.component.css']
})

export class AlledrogoNavbarComponent {

  public counter: Observable<number> | undefined;
  public products: Observable<Product[]> | undefined;

  @Input() routes: { label: string, route: string }[] = [];


  constructor(public service: AlledrogoService, private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  viewCard() {
    this.router.navigateByUrl(RoutesConfig.basketPage);
  }

  onItemDelete(product: Product) {
    this.service.removeFromBasket(product);
  }

  ngOnInit(): void {
    this.products = this.service.products;
    this.counter = this.service.counter;
  }
}
