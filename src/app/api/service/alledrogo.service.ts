import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {TokenStorageService} from "../../auth/services/token-storage.service";


@Injectable({
  providedIn: 'root'
})
export class AlledrogoService {

  constructor(private http: HttpClient,
              private tokenStorage: TokenStorageService) {
  }
  private _products = new BehaviorSubject<Product[]>([]);
  readonly products = this._products.asObservable();

  private _basketProducts = new BehaviorSubject<Product[]>([]);
  readonly basketProducts = this._basketProducts.asObservable();

  private _counter = new BehaviorSubject<number>(0);
  readonly counter = this._counter.asObservable();

  increaseCounter = (): void => {
    this._counter.next(this._counter.value + 1);
  }

  decreaseCounter = (): void => {
    this._counter.next(this._counter.value - 1);
  }

  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}products`)
      .pipe(tap(results => {
        this._products.next(results);
      }));
  }

  getProductsFromBasket = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}products/fromBasket/${this.tokenStorage.getBasketName()}`)
      .pipe(tap(results => {
        this._basketProducts.next(results);
        this._counter.next(results.length);
      }));
  }

  addProductToBasket = (product: Product) => {
    this.increaseCounter();
    this._basketProducts.next([...this._basketProducts.value, product]);
    return this.http.post(`${environment.alledrogoEndpointUrl}product/toBasket/${this.tokenStorage.getBasketName()}/${product.productName}`, null)
      .subscribe();
  }

  removeFromBasket = (product: Product) => {
    this.decreaseCounter();
    this._basketProducts.next(this._basketProducts.value.filter(p => p.productName !== product.productName));
    this.http.delete(`${environment.alledrogoEndpointUrl}product/fromBasket/${this.tokenStorage.getBasketName()}/${product.productName}`)
      .subscribe();
  }

  clearProductsAndCounter() {
    this._basketProducts.next([]);
    this._counter.next(0);
  }


  isProductInBasket(product: Product | undefined): boolean {
    if (product != undefined) {
      return this._basketProducts.value.includes(product);
    } else {
      return false;
    }
  }

  basketIsEmpty(): boolean {
    return this._basketProducts.value.length === 0;
  }
}

