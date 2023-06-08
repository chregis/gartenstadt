import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, Subscription} from "rxjs";
import {ApiService} from "../../shared/api/api.service";

interface FotoRef {
  url: string,
  description: string
}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
  host: {
    style: 'width: 100%;',
  }
})
export class FotosComponent implements OnInit, OnDestroy {

  fotos: FotoRef[] | undefined;
  currentFotoIndex = 0;
  private apiSubscription: Subscription;

  autoSlide = true;
  private intervalSubscription: Subscription;

  constructor(private elementRef: ElementRef, private api: ApiService) {
    this.apiSubscription = api.getData<FotoRef[]>('assets/img/gallerie/foto-liste.json', 'fotos')
      .subscribe( fotos => this.fotos = fotos);

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
      .body.style.backgroundImage = `url("assets/img/gallerie/${this.fotos[this.currentFotoIndex].url}")`;
  }

  next(autoSlide: boolean = false) {
    this.autoSlide = autoSlide;
    if(!this.fotos) {
      return;
    }

    this.currentFotoIndex++;
    if(this.currentFotoIndex >= this.fotos.length) {
      this.currentFotoIndex = 0;
    }

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = `url("assets/img/gallerie/${this.fotos[this.currentFotoIndex].url}")`;

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
    this.apiSubscription.unsubscribe();
    this.intervalSubscription.unsubscribe();
  }

}
