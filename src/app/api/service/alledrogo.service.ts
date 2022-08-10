import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "../../auth/services/token-storage.service";


@Injectable({
  providedIn: 'root'
})
export class AlledrogoService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService,
              private tokenStorage: TokenStorageService) {
  }

  private _products = new BehaviorSubject<Product[]>([]);
  count: number = 0;
  readonly products = this._products.asObservable();

  increaseCounter = (): void => {
    this.count++;
  }

  decreaseCounter = (): void => {
    this.count--;
  }


  getDecodedAccessToken(token: any): any {
    try {
      return this.jwtHelper.decodeToken(token);
    } catch (Error) {
      return null;
    }
  }

  getBasketName(): string {
    let token = this.tokenStorage.getAccessToken();
    let tokenInfo = this.getDecodedAccessToken(token);
    return tokenInfo.basketName;
  }

  getUserNameFromToken(): string {
    let token = this.tokenStorage.getAccessToken();
    let tokenInfo = this.getDecodedAccessToken(token);
    return tokenInfo.name;
  }


  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAll`);
  }

  addProductToBasket = (product: Product) => {
    this.increaseCounter();
    this._products.next([...this._products.value, product]);
    return this.http.post(`${environment.alledrogoEndpointUrl}product/addToBasket/${this.getBasketName()}/${product.productName}`, null)
      .subscribe();
  }

  getProductsFromBasket = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAllFromBasket/${this.getBasketName()}`)
      .pipe(tap(results => {
        this._products.next(results);
        this.count = results.length;
      }));
  }

  removeFromBasket = (product: Product) => {
    this.decreaseCounter();
    this._products.next(this._products.value.filter(p => p.productName !== product.productName));
    this.http.delete(`${environment.alledrogoEndpointUrl}product/removeFromBasket/${this.getBasketName()}/${product.productName}`)
      .subscribe(
      );
  }
}

