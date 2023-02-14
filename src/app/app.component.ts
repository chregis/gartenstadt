import { Component } from '@angular/core';
import {MenuItem} from "./shared/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gartenstadt';

  mainMenu: MenuItem[] = [
    { name: 'das Musikfest', routerLink: 'home'},
    { name: 'Mitmachen', routerLink: 'anmeldung'},
    { name: 'Fotos', routerLink: 'fotos'},
  ]
}
