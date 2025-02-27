import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
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
export class SponsorenComponent implements OnInit, OnDestroy {
  sponsorenOhneLogo: Sponsor[] = [];
  sponsorenMitLogo: Sponsor[] = [];

  subscription: Subscription;

  constructor(api: ApiService) {
    this.subscription = api.getData<Sponsor[]>('assets/sponsoren/sponsoren-liste.json', 'sponsoren').subscribe( sponsoren => {
      this.sponsorenOhneLogo = sponsoren.filter( sponsor => sponsor.logo_url == null);
      this.sponsorenMitLogo = sponsoren.filter( sponsor => sponsor.logo_url != null);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
