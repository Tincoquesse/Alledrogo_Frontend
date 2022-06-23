import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { AlledrogoNavbarComponent } from './components/alledrogo-navbar/alledrogo-navbar.component';
import { AlledrogoTopLogoComponent } from './components/alledrogo-top-logo/alledrogo-top-logo.component';



@NgModule({
  declarations: [
    AlledrogoNavbarComponent,
    AlledrogoTopLogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AlledrogoNavbarComponent,
    AlledrogoTopLogoComponent
  ]
})
export class SharedModule { }
