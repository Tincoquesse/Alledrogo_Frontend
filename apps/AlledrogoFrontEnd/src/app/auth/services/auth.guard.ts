import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from "./token-storage.service";
import {RoutesConfig} from "../../app-routing.module";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private tokenStorage: TokenStorageService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenStorage.isLoggedIn()){
      return true
    } else {
      this.router.navigate([RoutesConfig.loginPage]);
      return false
    }
  }

}
