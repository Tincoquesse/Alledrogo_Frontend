import {Component, OnInit} from '@angular/core';
import {Product} from "../../../api/model/product";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-basket-product-list',
  templateUrl: './basket-product-list.component.html',
  styleUrls: ['./basket-product-list.component.css']
})
export class BasketProductListComponent implements OnInit{

  public products: Observable<Product[]> | undefined;

  constructor(private alleService: AlledrogoService) {}

  ngOnInit() {
    this.products = this.alleService.products;
  }

  onItemDelete = (product: Product) => {
    this.alleService.removeFromBasket(product);
  }
}
