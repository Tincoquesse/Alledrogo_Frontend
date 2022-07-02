import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }


  login(mail: string, password: string) {
    const params = new HttpParams().set('username', mail).set('password', password);
    return this.http.post<any>(`${environment.authEndpoint}login`, params)

  }
}

