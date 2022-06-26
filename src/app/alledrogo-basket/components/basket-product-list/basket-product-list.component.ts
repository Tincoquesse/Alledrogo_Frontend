import {Component, OnInit} from '@angular/core';
import {Product} from "../../../api/model/product";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {map} from "rxjs";

@Component({
  selector: 'app-basket-product-list',
  templateUrl: './basket-product-list.component.html',
  styleUrls: ['./basket-product-list.component.css']
})
export class BasketProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private alleService: AlledrogoService) {
  }

  getAll(): void {
    this.alleService.getProductsFromBasket().pipe(
      map(data => data as Product[])
    ).subscribe(results => {
      this.products = results
    });
  }

  deleteFromProducts(name: string): void {
    for (let product of this.products) {
      if (product.productName === name) {
        this.products.splice(this.products.indexOf(product), 1);
        break;
      }
    }
    this.alleService.decreaseCounter();
  }

  ngOnInit(): void {
    this.getAll();
  }

  onItemDelete = (name: string) => {
    this.alleService.removeFromBasket(name);
    this.deleteFromProducts(name);
  }
}
