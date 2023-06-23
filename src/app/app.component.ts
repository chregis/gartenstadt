import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { debounceTime, filter, fromEvent, map, merge, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl$: Observable<string> = of('');
  mouse$ = merge(fromEvent(document,'click'), fromEvent(document, 'mousemove'));
  isSideNavVisible = false;

  constructor(public router: Router) {
    this.currentUrl$ = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map( e => {
          const event = e as NavigationEnd;
          this.isSideNavVisible = false;
          return event.urlAfterRedirects;
        })
      );

    const show$ = this.mouse$.pipe(
      map( () => 'visible')
    );
    const hide$ = this.mouse$.pipe(
      map(() => 'hidden'),
      debounceTime(2000),
    );
    merge(show$, hide$).subscribe( mode => {
      this.autoVisibleClass = 'auto-visible ' + mode;
    });
  }

  toggleSideNav() {
    this.isSideNavVisible = !this.isSideNavVisible;
  }

  autoVisibleClass = 'auto-visible visible';
}
