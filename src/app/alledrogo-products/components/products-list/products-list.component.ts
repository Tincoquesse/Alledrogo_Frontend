import {Component, OnInit} from '@angular/core';
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {Product} from "../../../api/model/product";
import {map, Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Observable<Product[]> | undefined;

  constructor(private alleService: AlledrogoService, private jwtHelper: JwtHelperService) {
  }

  isProductPresentInBasket(product: Product): boolean {
    let flag = false;
    this.alleService.basketProducts.subscribe((x) => {
      x.forEach(item => {
        if (item.productName == product.productName) {
          flag = true
        }
      })
    })
    return flag;
  }

  ngOnInit(): void {
    this.products = this.alleService.products;
  }

  addItem = (product: Product) => {
    if (!this.jwtHelper.isTokenExpired() && !this.isProductPresentInBasket(product)) {
      this.alleService.addProductToBasket(product);
    }
  }
}
