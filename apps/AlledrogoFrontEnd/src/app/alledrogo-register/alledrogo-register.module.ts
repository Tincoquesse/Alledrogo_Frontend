import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AlledrogoRegisterPageComponent } from './pages/alledrogo-register-page/alledrogo-register-page.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegisterFormComponent,
    AlledrogoRegisterPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AlledrogoRegisterPageComponent]
})
export class AlledrogoRegisterModule { }
