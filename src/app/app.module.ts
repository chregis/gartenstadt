import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { AnmeldungComponent } from './pages/anmeldung/anmeldung.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import {SharedModule} from "./shared/shared.module";
import { AnmeldenMenuComponent } from './menus/anmelden-menu/anmelden-menu.component';
import { SponsorenComponent } from './pages/sponsoren/sponsoren.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AnmeldungComponent,
    HomeComponent,
    MainMenuComponent,
    AnmeldenMenuComponent,
    SponsorenComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
