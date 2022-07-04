import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private ACCESS_TOKEN = 'access_token';
  private REFRESH_TOKEN = 'refresh_token';
  private loggedIn = false;

  constructor() {
  }

  saveTokens(accessTok: string, refreshTok: string) {
    if (!accessTok || !refreshTok){
      return
    }
    window.localStorage.removeItem(this.ACCESS_TOKEN);
    window.localStorage.removeItem(this.REFRESH_TOKEN);

    window.localStorage.setItem(this.ACCESS_TOKEN, accessTok);
    window.localStorage.setItem(this.REFRESH_TOKEN, refreshTok);
    this.setLoggedIn();
  }

  getAccessToken() {
    return window.localStorage.getItem(this.ACCESS_TOKEN);
  }
  getRefreshToken() {
    return window.localStorage.getItem(this.REFRESH_TOKEN);
  }
  isLogged(): boolean{
    return this.loggedIn;
  }
  setLoggedIn(){
    this.loggedIn = true;
  }
  tokenIsNotPresent():boolean {
    return !window.localStorage.getItem(this.ACCESS_TOKEN);
  }

  tokenIsPresent():boolean {
    return !!window.localStorage.getItem(this.ACCESS_TOKEN);
  }
}
