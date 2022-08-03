import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private ACCESS_TOKEN = 'access_token';
  private REFRESH_TOKEN = 'refresh_token';

  constructor(private jwtHelper: JwtHelperService) {
  }

  saveTokens(accessTok: string, refreshTok: string) {
    if (!accessTok || !refreshTok){
      return
    }
    window.localStorage.removeItem(this.ACCESS_TOKEN);
    window.localStorage.removeItem(this.REFRESH_TOKEN);

    window.localStorage.setItem(this.ACCESS_TOKEN, accessTok);
    window.localStorage.setItem(this.REFRESH_TOKEN, refreshTok);
  }

  getAccessToken():any {
    return window.localStorage.getItem(this.ACCESS_TOKEN);
    }

  getRefreshToken() {
    return window.localStorage.getItem(this.REFRESH_TOKEN);
  }
  isLoggedIn(): boolean{
    return this.tokenIsPresent() && !this.jwtHelper.isTokenExpired(this.getAccessToken());
  }

  tokenIsNotPresent():boolean {
    return !window.localStorage.getItem(this.ACCESS_TOKEN);
  }

  tokenIsPresent():boolean {
    return !!window.localStorage.getItem(this.ACCESS_TOKEN);
  }

  clearTokens() {
    window.localStorage.removeItem(this.ACCESS_TOKEN);
    window.localStorage.removeItem(this.REFRESH_TOKEN);
  }

  isTokenExpired(): boolean{
    return this.jwtHelper.isTokenExpired(this.getAccessToken());
  }

}
