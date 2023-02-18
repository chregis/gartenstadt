import {Component, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, map, Observable, of} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl: Observable<string> = of('');

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(public router: Router) {
    this.currentUrl = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map( e => {
          const event = e as NavigationEnd;
          this.sidenav?.close();
          return event.urlAfterRedirects;
        })
      );
  }


  // mainMenu: MenuItem[] = [
  //   { name: 'das Musikfest', routerLink: 'home'},
  //   { name: 'Mitmachen', routerLink: 'anmeldung'},
  //   { name: 'Fotos', routerLink: 'fotos'},
  // ]
}
