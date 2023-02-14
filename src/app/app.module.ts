import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { AnmeldungComponent } from './pages/anmeldung/anmeldung.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import {SharedModule} from "./shared/shared.module";
import { AnmeldenMenuComponent } from './menus/anmelden-menu/anmelden-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AnmeldungComponent,
    HomeComponent,
    MainMenuComponent,
    AnmeldenMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
