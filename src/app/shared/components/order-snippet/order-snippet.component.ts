import {Component, Injectable, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {async, map} from "rxjs";
import {Product} from "../../../api/model/product";



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-order-snippet',
  templateUrl: './order-snippet.component.html',
  styleUrls: ['./order-snippet.component.css']
})
export class OrderSnippetComponent implements OnInit, OnChanges{

  basketProduct: Product[] = [];

  constructor(public service: AlledrogoService) {
}
  deleteFromOrderSnippet = (name:string): void => {
    console.log('delete from snippet')
    for (let product of this.basketProduct) {
      if (product.productName === name) {
        this.basketProduct.splice(this.basketProduct.indexOf(product), 1);
        break;
      }
    }
  }

  getAll(): void {
    this.service.getProductsFromBasket().pipe(
      map(data => data as Product[])
    ).subscribe(results => {
      this.basketProduct = results
    });
  }
  ngOnInit() {
  this.getAll();
}

  ngOnChanges(changes: SimpleChanges): void {
    this.getAll()
  }


}
