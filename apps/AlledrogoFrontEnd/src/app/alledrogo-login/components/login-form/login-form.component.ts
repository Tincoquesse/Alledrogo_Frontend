import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";
import {map, NEVER} from "rxjs";
import {AuthResponse} from "../../../auth/model/authResponse";
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {JwtHelperService} from "@auth0/angular-jwt";


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
              public jwtHelper: JwtHelperService) {
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
        .pipe(map(data => data as AuthResponse))
        .subscribe(response => {
          this.tokenStorage.saveTokens(response.access_token, response.refresh_token);
          // this.router.navigateByUrl(RoutesConfig.productsPage).then(r => NEVER);
          window.location.assign(RoutesConfig.productsPage)
        });
    }
  }

  OnRegister() {
    this.router.navigateByUrl(RoutesConfig.registerPage).then(r => NEVER);
  }

  onCancel() {
    this.router.navigateByUrl(RoutesConfig.productsPage).then(r => NEVER);
  }

  onLogOut() {
    this.tokenStorage.clearTokens();
    window.location.assign(RoutesConfig.loginPage);
  }
}
