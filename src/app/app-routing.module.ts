import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnmeldungComponent} from "./pages/anmeldung/anmeldung.component";
import {HomeComponent} from "./pages/home/home.component";

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
