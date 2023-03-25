import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, map, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl: Observable<string> = of('');

  isSideNavVisible = false;

  constructor(public router: Router) {
    this.currentUrl = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map( e => {
          const event = e as NavigationEnd;
          this.isSideNavVisible = false;
          return event.urlAfterRedirects;
        })
      );
  }

  toggleSideNav() {
    this.isSideNavVisible = !this.isSideNavVisible;
  }
}
