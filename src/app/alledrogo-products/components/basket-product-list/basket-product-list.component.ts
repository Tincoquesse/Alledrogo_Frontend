import {Component, OnInit, Output} from '@angular/core';
import {Product} from "../../../api/model/product";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {map} from "rxjs";

@Component({
  selector: 'app-basket-product-list',
  templateUrl: './basket-product-list.component.html',
  styleUrls: ['./basket-product-list.component.css']
})
export class BasketProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private alleService: AlledrogoService) {
  }

  refreshPage() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.alleService.getProductsFromBasket().pipe(
      map(data => data as Product[]),
    ).subscribe(results => {
      this.products = results
    });
  }

  onItemDelete = (name: any) => {
    this.alleService.removeFromBasket(name).add(this.refreshPage);

  }
}
