import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlledrogoHomePageComponent } from './pages/alledrogo-home-page/alledrogo-home-page.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AlledrogoHomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlledrogoHomeModule { }
