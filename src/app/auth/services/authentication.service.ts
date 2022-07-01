import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import * as moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }


  login = (mail: string, password: string) => {
    const params = new HttpParams().set('username', mail).set('password', password);
    return this.http.post(`${environment.authEndpoint}login`, params)
      .subscribe()
  }
}
