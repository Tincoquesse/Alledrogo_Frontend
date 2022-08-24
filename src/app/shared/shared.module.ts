import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AlledrogoNavbarComponent} from './components/alledrogo-navbar/alledrogo-navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    AlledrogoNavbarComponent,
    SearchBarComponent,
    LoadingSpinnerComponent,

  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatToolbarModule
    ],
    exports: [
        AlledrogoNavbarComponent,
        LoadingSpinnerComponent,

    ]
})
export class SharedModule { }
