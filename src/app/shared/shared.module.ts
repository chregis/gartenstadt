import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {RouterModule} from "@angular/router";
import {ApiService} from "./api/api.service";



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    ApiService
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ]
})
export class SharedModule { }
