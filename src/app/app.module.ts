import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import { AnmeldungComponent } from './pages/anmeldung/anmeldung.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import {SharedModule} from "./shared/shared.module";
import { AnmeldenMenuComponent } from './menus/anmelden-menu/anmelden-menu.component';
import { SponsorenComponent } from './pages/sponsoren/sponsoren.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import {HttpClientModule} from "@angular/common/http";
import { StartSeiteFuerAnmeldungComponent } from './pages/home/start-seite-fuer-anmeldung/start-seite-fuer-anmeldung.component';
import { DasOkComponent } from './pages/home/das-ok/das-ok.component';
import { StartSeiteVorAnlassComponent } from './pages/home/start-seite-vor-anlass/start-seite-vor-anlass.component';
import {MatLegacyTooltipModule as MatTooltipModule} from "@angular/material/legacy-tooltip";
import { FormularLinksComponent } from './pages/anmeldung/formular-links/formular-links.component';
import { StartSeiteNachAnlassComponent } from './pages/home/start-seite-nach-anlass/start-seite-nach-anlass.component';
import { FotoAlbumMenuComponent } from './menus/foto-album-menu/foto-album-menu.component';
import { DatenschutzerklaerungComponent } from './pages/datenschutz/datenschutzerklaerung/datenschutzerklaerung.component';
import { ImpressumComponent } from './pages/datenschutz/impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    AnmeldungComponent,
    HomeComponent,
    MainMenuComponent,
    AnmeldenMenuComponent,
    SponsorenComponent,
    FotosComponent,
    StartSeiteFuerAnmeldungComponent,
    DasOkComponent,
    StartSeiteVorAnlassComponent,
    FormularLinksComponent,
    StartSeiteNachAnlassComponent,
    FotoAlbumMenuComponent,
    DatenschutzerklaerungComponent,
    ImpressumComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        SharedModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
