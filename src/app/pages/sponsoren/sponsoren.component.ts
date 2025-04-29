import {Component, OnDestroy, OnInit, Signal} from '@angular/core';
import {map} from "rxjs";
import {ApiService} from "../../shared/api/api.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {KeyValue} from "@angular/common";

interface SponsorMap {
  [year: string]: SplitSponsors
}

interface SplitSponsors {
  sponsorenOhneLogo: Sponsor[],
  sponsorenMitLogo: Sponsor[]
}


interface Sponsor {
  years: string[],
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

  sponsorMap: Signal<SponsorMap>;
  keyDescOrder = (a: KeyValue<string,SplitSponsors>, b: KeyValue<string,SplitSponsors>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  constructor(api: ApiService) {
    const sponsoren$ = api.getData<Sponsor[]>('assets/sponsoren/sponsoren-liste.json', 'sponsoren').pipe(

      map(sponsoren => {
        return  sponsoren.reduce((map, sponsor) => {
          sponsor.years.forEach(year => {
            map[year] = map[year] ?? {sponsorenOhneLogo: [], sponsorenMitLogo: []};
            if (sponsor.logo_url == null) {
              map[year].sponsorenOhneLogo.push(sponsor);
            } else {
              map[year].sponsorenMitLogo.push(sponsor);
            }
          })
          return map;
        }, {} as SponsorMap);
      })
    );
    this.sponsorMap = toSignal(sponsoren$, { initialValue: {} });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

}
