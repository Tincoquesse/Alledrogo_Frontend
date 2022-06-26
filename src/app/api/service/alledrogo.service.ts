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


  public count: number = 0;
  public basketProduct: Product[] = []

  increaseCounter = ():void => {
  this.count++;
  }

  decreaseCounter = ():void => {
    this.count--;
  }

  updateCounter = ():void => {
   this.getProductsFromBasket().subscribe(data =>  this.count = data.length);
  }

  getProducts = (): Observable<Product[]> =>
    this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAll`);

  addProductToBasket = (name: string) => {
    return this.http.post(`${environment.alledrogoEndpointUrl}product/addToBasket/koszyk3/${name}`, null)
      .subscribe();
  }

  getProductsFromBasket = (): Observable<Product[]> =>
    this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAllFromBasket/koszyk3`);


  removeFromBasket = (name: string) =>
    this.http.delete(`${environment.alledrogoEndpointUrl}product/removeFromBasket/koszyk3/${name}`)
      .subscribe(
      );
}

