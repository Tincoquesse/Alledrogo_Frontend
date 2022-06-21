import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class AlledrogoService {

  constructor(private http: HttpClient) {}

  getProducts = (): Observable<Product[]> =>
    this.http.get<Product[]>(`${environment.alledrogoEndpointUrl}product/getAll`);
}
