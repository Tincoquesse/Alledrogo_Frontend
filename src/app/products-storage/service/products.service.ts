import { Injectable } from '@angular/core';
import {AlledrogoService} from "../../api/service/alledrogo.service";
import {BehaviorSubject} from "rxjs";
import {Product} from "../../api/model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products = new BehaviorSubject<Product[]>([]);
  private dataStore: { products: Product[] } = { products: [] };
  readonly products = this._products.asObservable();

  constructor(private alleService: AlledrogoService) {

  }

  get Products() {
    return this._products.asObservable();
  }

  loadAll() {
    this.alleService.getProductsFromBasket().subscribe(
      data => {
        this.dataStore.products = data;
        this._products.next(Object.assign({}, this.dataStore).products);
      },
      error => console.log("Could not load Products")
    )
  }

}
