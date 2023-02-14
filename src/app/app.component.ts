import { Component } from '@angular/core';
import {MenuItem} from "./shared/menu/menu.component";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl: Observable<string> = of('');

  constructor(public router: Router) {
    this.currentUrl = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map( e => {
          const event = e as NavigationEnd;
          return event.urlAfterRedirects;
        })
      );
  }


  mainMenu: MenuItem[] = [
    { name: 'das Musikfest', routerLink: 'home'},
    { name: 'Mitmachen', routerLink: 'anmeldung'},
    { name: 'Fotos', routerLink: 'fotos'},
  ]
}
