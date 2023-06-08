import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {ApiService} from "../../shared/api/api.service";

interface Sponsor {
  name: string,
  logo_url?: string,
  page_url?: string,
  img_style: string
}

@Component({
  selector: 'app-sponsoren',
  templateUrl: './sponsoren.component.html',
  styleUrls: ['./sponsoren.component.css'],
  host: {
    style: 'width: 100%;',
  }
})
export class SponsorenComponent implements OnInit {
  sponsorenOhneLogo$: Observable<Sponsor[]>;
  sponsorenMitLogo$: Observable<Sponsor[]>;

  constructor(private api: ApiService) {
    let sponsoren$ = api.getData<Sponsor[]>('assets/img/sponsoren/sponsoren-liste.json', 'sponsoren');
    this.sponsorenOhneLogo$ = sponsoren$.pipe(
      map( sponsoren => sponsoren.filter( sponsor => sponsor.logo_url == null)));
    this.sponsorenMitLogo$ = sponsoren$.pipe(
      map( sponsoren => sponsoren.filter( sponsor => sponsor.logo_url != null)));
  }

  ngOnInit(): void {
  }

}
