import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {map, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlledrogoService {

  constructor(private http: HttpClient) {
  }

  totalOrderPrice: number = 0;
  count: number = 0;


  increaseCounter = ():void => {
  this.count++;
  }

  decreaseCounter = ():void => {
    this.count--;
  }

  products: Product[] = [];

  updateOrderPrice(): void {
    this.getProductsFromBasket().subscribe(res => this.products = res)
    let temp = 0;
    for (let product of this.products){
      temp += product.productPrice
    }
    this.totalOrderPrice = temp;
  }
  updateCounter = ():void => {
   this.getProductsFromBasket().subscribe(data =>  this.count = data.length)
  }

  getProducts = (): Observable<Product[]> => {
   return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAll`);
  }
  addProductToBasket = (name: string) => {
    return this.http.post(`${environment.alledrogoEndpointUrl}product/addToBasket/koszyk3/${name}`, null)
      .subscribe();
  }

  getProductsFromBasket = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAllFromBasket/koszyk3`);
  }

  removeFromBasket = (name: string) => {
    this.http.delete(`${environment.alledrogoEndpointUrl}product/removeFromBasket/koszyk3/${name}`)
      .subscribe(
      );
  }
}

