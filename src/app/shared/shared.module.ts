import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AlledrogoNavbarComponent} from './components/alledrogo-navbar/alledrogo-navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AlledrogoNavbarComponent,
    SearchBarComponent,

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
