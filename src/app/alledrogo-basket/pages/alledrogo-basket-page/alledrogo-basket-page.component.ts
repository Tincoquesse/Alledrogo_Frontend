import { Component, OnInit } from '@angular/core';
import {AlledrogoService} from "../../../api/service/alledrogo.service";

@Component({
  selector: 'app-alledrogo-basket-page',
  templateUrl: './alledrogo-basket-page.component.html',
  styleUrls: ['./alledrogo-basket-page.component.css']
})
export class AlledrogoBasketPageComponent implements OnInit {

  constructor(private service: AlledrogoService) { }

  ngOnInit(): void {
    this.service.getProductsFromBasket();
    console.log("basket page active")
  }

}
