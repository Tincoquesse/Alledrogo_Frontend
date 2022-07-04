import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RoutesConfig} from "../../../app-routing.module";
import {map, NEVER} from "rxjs";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {User} from "../../../auth/model/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


  form: any | undefined = new FormGroup({
    name: new FormControl(('')),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private alleService: AlledrogoService,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let name = this.form.get('name').value;
    let username = this.form.get('username').value;
    let password = this.form.get('password').value;

    if (username && password && name) {
      this.authService.register(name, username, password)
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
}
