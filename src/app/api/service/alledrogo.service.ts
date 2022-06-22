import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlledrogoService {

  constructor(private http: HttpClient) {
  }

  getProducts = (): Observable<Product[]> =>
    this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAll`);

  addProductToBasket = (name: string) => {
    this.http.post(`${environment.alledrogoEndpointUrl}product/addToBasket/koszyk3/${name}`, null)
      .subscribe();
  }

  getProductsFromBasket = (): Observable<Product[]> =>
    this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAllFromBasket/koszyk3`);


  removeFromBasket = (name: string) =>
    this.http.delete(`${environment.alledrogoEndpointUrl}product/removeFromBasket/koszyk3/${name}`)
      .subscribe();
}

