import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AlledrogoNavbarComponent} from './components/alledrogo-navbar/alledrogo-navbar.component';


@NgModule({
  declarations: [
    AlledrogoNavbarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AlledrogoNavbarComponent,

  ]
})
export class SharedModule { }
