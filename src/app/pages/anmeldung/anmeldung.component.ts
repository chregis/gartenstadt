import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-anmeldung',
  templateUrl: './anmeldung.component.html',
  styleUrls: ['./anmeldung.component.css']
})
export class AnmeldungComponent implements OnInit {

  fragment: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe( (fragment: any) => {
      this.fragment = fragment;
      setTimeout(() => this.scroll(), 200);
    });
  }

  scroll(): void {
    try {
      if(this.fragment) {

        const element = document?.getElementById(this.fragment);
        if(!element) {
          return;
        }

        // const scrollContainer = document.querySelector(".page-content");
        // const scrollPositionY: number = element.offsetTop;

        // if(scrollPositionY != null && scrollContainer) {
        //   scrollContainer.scrollTo({ top: scrollPositionY + -100, behavior: "smooth" });
        // } else {
          element.scrollIntoView({behavior: "smooth", block: "center"});
        // }

      }
    } catch (e) { }
  }


}
