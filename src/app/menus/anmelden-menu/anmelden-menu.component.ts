import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-anmelden-menu',
  templateUrl: './anmelden-menu.component.html',
  styleUrls: ['./anmelden-menu.component.css']
})
export class AnmeldenMenuComponent implements OnInit, AfterViewChecked {

  fragment: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe( (fragment: any) => { this.fragment = fragment; });
  }

  ngAfterViewChecked(): void {
    try {
      if(this.fragment) {
        // document?.getElementById(this.fragment)?.scrollIntoView();
        const element = document?.getElementById(this.fragment);
        if(!element) {
          return;
        }

        var headerOffset = 100;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        console.log(elementPosition + ' + ' + window.pageYOffset + " - " + headerOffset + " = " + offsetPosition);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } catch (e) { }
  }

}
