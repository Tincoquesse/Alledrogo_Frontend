import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "../../auth/services/token-storage.service";


@Injectable({
  providedIn: 'root'
})
export class AlledrogoService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private tokenStorage: TokenStorageService) {
  }

  totalOrderPrice: number = 0;
  count: number = 0;


  increaseCounter = (): void => {
    this.count++;
  }

  decreaseCounter = (): void => {
    this.count--;
  }

  products: Product[] = [];

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

  updateOrderPrice(): void {
    if (this.tokenStorage.tokenIsPresent()) {
      this.getProductsFromBasket().subscribe(res => this.products = res)
      let temp = 0;
      for (let product of this.products) {
        temp += product.productPrice
      }
      this.totalOrderPrice = temp;
    }
    return
  }

  updateCounter = ():void => {
   this.getProductsFromBasket().subscribe(data =>  this.count = data.length)
  }

  getProducts = (): Observable<Product[]> => {
   return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAll`);
  }

  addProductToBasket = (name: string) => {
    return this.http.post(`${environment.alledrogoEndpointUrl}product/addToBasket/${this.getBasketName()}/${name}`, null)
      .subscribe();
  }

  getProductsFromBasket = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAllFromBasket/${this.getBasketName()}`);
  }

  removeFromBasket = (name: string) => {
    this.http.delete(`${environment.alledrogoEndpointUrl}product/removeFromBasket/${this.getBasketName()}/${name}`)
      .subscribe(
      );
  }
}

