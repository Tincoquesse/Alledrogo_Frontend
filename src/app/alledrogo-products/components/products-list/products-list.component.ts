import {Component, OnInit} from '@angular/core';
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {Product} from "../../../api/model/product";
import {map} from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(private alleService: AlledrogoService, private jwtHelper: JwtHelperService) {
  }

  refreshPage() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.alleService.getProducts().pipe(
      map(data => data as Product[])
    ).subscribe(results => {
      this.products = results
    });
  }
  onItemDone = (name: string) => {
    if (!this.jwtHelper.isTokenExpired()) {
      this.alleService.addProductToBasket(name);
      this.alleService.increaseCounter();
    }
  }
}
