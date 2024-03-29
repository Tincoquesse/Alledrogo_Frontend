import {TokenStorageService} from "./token-storage.service";
import {RoutesConfig} from "../../app-routing.module";
import {AlledrogoService} from "../../api/service/alledrogo.service";
import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {


  constructor(private tokenStorage: TokenStorageService, private router: Router,
              private service: AlledrogoService) {
  }

  canActivate(): boolean {
    if (this.tokenStorage.isLoggedIn() && !this.service.isBasketEmpty()) {
      return true
    } else {
      this.router.navigate([RoutesConfig.basketPage]);
      return false
    }
  }

}
