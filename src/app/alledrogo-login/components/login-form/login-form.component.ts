import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";
import {map, NEVER, switchMap, tap} from "rxjs";
import {AuthResponse} from "../../../auth/model/authResponse";
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AlledrogoService} from "../../../api/service/alledrogo.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: any | undefined = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthenticationService,
              public tokenStorage: TokenStorageService, private router: Router,
              public jwtHelper: JwtHelperService, private service: AlledrogoService) {
  }

  ngOnInit(): void {
    if (!this.jwtHelper.isTokenExpired()) {
      console.log("you are already logged in");
    }
  }

  onSubmit(): void {
    let username = this.form.get('username').value;
    let password = this.form.get('password').value;
    if (username && password) {
      this.auth.login(username, password)
        .pipe(
          map(data => data as AuthResponse),
          tap(response => this.tokenStorage.saveTokens(response.access_token, response.refresh_token)),
          switchMap(() => this.service.getProductsFromBasket()))
        .subscribe(() => {

          this.router.navigateByUrl(RoutesConfig.productsPage);
        });
    }
  }

  OnRegister() {
    this.router.navigateByUrl(RoutesConfig.registerPage);
  }

  onCancel() {
    this.router.navigateByUrl(RoutesConfig.productsPage);
  }

  onLogOut() {
    this.tokenStorage.clearTokens();
    this.router.navigateByUrl(RoutesConfig.loginPage);
  }
}
