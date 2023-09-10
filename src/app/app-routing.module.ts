import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnmeldungComponent} from "./pages/anmeldung/anmeldung.component";
import {HomeComponent} from "./pages/home/home.component";
import {SponsorenComponent} from "./pages/sponsoren/sponsoren.component";
import {FotosComponent} from "./pages/fotos/fotos.component";
import {
  DatenschutzerklaerungComponent
} from "./pages/datenschutz/datenschutzerklaerung/datenschutzerklaerung.component";
import {ImpressumComponent} from "./pages/datenschutz/impressum/impressum.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'anmeldung',
    component: AnmeldungComponent
  },
  {
    path: 'fotos',
    redirectTo: 'fotos/2023'
  },
  {
    path: 'fotos/:albumId',
    component: FotosComponent
  },
  {
    path: 'sponsoren',
    component: SponsorenComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzerklaerungComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
