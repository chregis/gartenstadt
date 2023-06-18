import { Component } from '@angular/core';
import {map} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-formular-links',
  templateUrl: './formular-links.component.html',
  styleUrls: ['./formular-links.component.css']
})
export class FormularLinksComponent {

  // Anchor Scrolling!
  // https://stackoverflow.com/questions/44441089/angular4-scrolling-to-anchor

  constructor(private route: ActivatedRoute) { }

  public fragment$ = this.route.fragment.pipe(
    map( (fragment: any) =>  fragment ? fragment : '' )
  );

}
