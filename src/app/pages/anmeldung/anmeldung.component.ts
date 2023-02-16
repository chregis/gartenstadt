import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-anmeldung',
  templateUrl: './anmeldung.component.html',
  styleUrls: ['./anmeldung.component.css']
})
export class AnmeldungComponent implements OnInit {

  // Anchor Scrolling!
  // https://stackoverflow.com/questions/44441089/angular4-scrolling-to-anchor

  constructor(private route: ActivatedRoute) { }

  public fragment$ = this.route.fragment.pipe(
    map( (fragment: any) =>  fragment ? fragment : '' )
  );

  ngOnInit(): void {

  }

}
