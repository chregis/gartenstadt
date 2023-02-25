import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {filter, from, interval, map, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']           ,
  host: {
    style: 'width: 100%;',
  }
})
export class FotosComponent implements OnInit, OnDestroy {

  fotos: {url: string, description: string}[] | undefined;
  currentFotoIndex = 0;
  private httpGetsSubscription: Subscription;

  autoSlide = true;
  private intervalSubscription: Subscription;

  constructor(private elementRef: ElementRef, private http: HttpClient) {
    this.httpGetsSubscription = from(http.get('assets/img/foto-liste.json')).pipe(
      map( (data: any) => data.fotos as {url: string, description: string}[])
    ).subscribe( fotos => this.fotos = fotos);

    this.intervalSubscription = interval(5000)
      .pipe(filter( () => this.autoSlide))
      .subscribe( () => this.next(true));
  }


  prev() {
    this.autoSlide = false;
    if(!this.fotos) {
      return;
    }

    this.currentFotoIndex--;
    if(this.currentFotoIndex < 0) {
      this.currentFotoIndex = this.fotos.length-1;
    }

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = `url("assets/img/${this.fotos[this.currentFotoIndex].url}")`;
  }

  next(autoslide: boolean = false) {
    this.autoSlide = autoslide;
    if(!this.fotos) {
      return;
    }

    this.currentFotoIndex++;
    if(this.currentFotoIndex >= this.fotos.length) {
      this.currentFotoIndex = 0;
    }

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = `url("assets/img/${this.fotos[this.currentFotoIndex].url}")`;

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundSize = "contain";
  }

  ngOnDestroy(): void {
    // this.elementRef.nativeElement.ownerDocument
    //   .body.style.backgroundImage = null;
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundSize = null;
    this.httpGetsSubscription.unsubscribe();
    this.intervalSubscription.unsubscribe();
  }

}
