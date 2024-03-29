import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenStorageService} from "./token-storage.service";
import {RoutesConfig} from "../../app-routing.module";
import {AlledrogoService} from "../../api/service/alledrogo.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private tokenStorage: TokenStorageService, private router: Router,
              private service: AlledrogoService) {
  }

  canActivate(): boolean {
    if (this.tokenStorage.isLoggedIn()) {
      return true
    } else {
      this.router.navigate([RoutesConfig.loginPage]);
      return false
    }
  }

}
