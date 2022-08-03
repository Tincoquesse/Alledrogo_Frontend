import {Component} from '@angular/core';
import {Product} from "../../../api/model/product";
import {AlledrogoService} from "../../../api/service/alledrogo.service";


@Component({
  selector: 'app-basket-product-list',
  templateUrl: './basket-product-list.component.html',
  styleUrls: ['./basket-product-list.component.css']
})
export class BasketProductListComponent {


  constructor(public alleService: AlledrogoService) {
  }

  onItemDelete = (product: Product) => {
    this.alleService.removeFromBasket(product);

  }
}
