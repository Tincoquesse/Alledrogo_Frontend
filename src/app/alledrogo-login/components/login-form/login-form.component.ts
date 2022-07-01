import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: any|undefined = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = []

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }
    onSubmit(): void {

      let username = this.form.get('username').value;
      let password = this.form.get('password').value;
      this.auth.login(username, password);

    }

}
