import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AlledrogoLoginPageComponent } from './pages/alledrogo-login-page/alledrogo-login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    LoginFormComponent,
    AlledrogoLoginPageComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
  exports: [AlledrogoLoginPageComponent]
})
export class AlledrogoLoginModule { }
