import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";
import {map, NEVER} from "rxjs";
import {AuthResponse} from "../../../auth/model/authResponse";
import {TokenStorageService} from "../../../auth/services/token-storage.service";


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

  constructor(private auth: AuthenticationService, private tokenStorage: TokenStorageService, private router: Router) {
  }


  ngOnInit(): void {
    if (this.tokenStorage.isLogged()) {
      console.log(this.tokenStorage.getAccessToken());
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
          this.tokenStorage.setLoggedIn();
          this.router.navigateByUrl(RoutesConfig.basketPage).then(r => NEVER)
        });
    }
  }

}
