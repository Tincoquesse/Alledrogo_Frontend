import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {map, NEVER} from "rxjs";
import {User} from "../../../auth/model/user";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent{


  form = new FormGroup({
    name: new FormControl('', [Validators.minLength(5)]),
    username: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')])
  });

  constructor(private router: Router, private alleService: AlledrogoService,
              private authService: AuthenticationService) {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.register(
        this.form?.controls['name'].value,
        this.form?.controls['username'].value,
        this.form?.controls['password'].value)
        .pipe(map(data => data as User))
        .subscribe(response => {
          console.log(response)
          this.router.navigateByUrl(RoutesConfig.loginPage).then(r => NEVER);
        });
    }
  }


  onCancel(): void {
    this.router.navigateByUrl(RoutesConfig.loginPage);
  }

  hasMinLengthError = (): boolean =>
    !!this.form?.controls['name'].errors?.hasOwnProperty('minlength');

  hasEmailValidateError = (): boolean =>
    !!this.form?.controls['username'].errors?.hasOwnProperty('email');

  hasMinPatternError = (): boolean =>
    !!this.form?.controls['password'].errors?.hasOwnProperty('pattern');
}
