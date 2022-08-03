import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {Observable, tap} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "../../auth/services/token-storage.service";


@Injectable({
  providedIn: 'root'
})
export class AlledrogoService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService,
              private tokenStorage: TokenStorageService) {
  }

  count: number = 0;
  products: Product[] = [];

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
    this.products.push(product);
    return this.http.post(`${environment.alledrogoEndpointUrl}product/addToBasket/${this.getBasketName()}/${product.productName}`, null)
      .subscribe();
  }

  getProductsFromBasket = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAllFromBasket/${this.getBasketName()}`)
      .pipe(tap(results => {
        this.products = results;
        this.count = results.length;
      }));
  }

  removeFromBasket = (product: Product) => {
    this.decreaseCounter();
    this.products = this.products.filter(p => p.productName === product.productName)
    this.http.delete(`${environment.alledrogoEndpointUrl}product/removeFromBasket/${this.getBasketName()}/${product.productName}`)
      .subscribe(
      );
  }
}

