import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, Subscription} from "rxjs";
import {ApiService} from "../../shared/api/api.service";

interface FotoRef {
  url: string,
  description: string
}

interface AlbumRef {
  path: string,
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
  albums: AlbumRef[] = [];
  currentAlbumIndex = 0;
  fotos: FotoRef[] = [];
  currentFotoIndex = 0;

  autoSlide = true;
  private intervalSubscription: Subscription;

  constructor(private elementRef: ElementRef, private api: ApiService) {

    this.api.getData<AlbumRef[]>('gallerie/album-liste.json', 'albums')
      .subscribe( albums => {
        this.albums = albums;
        if(this.albums.length > 0) {
          this.loadAlbum(this.albums[0]);
        }
      });

    this.intervalSubscription = interval(5000)
      .pipe(filter( () => this.autoSlide))
      .subscribe( () => this.next(true));
  }

  loadAlbum(album: AlbumRef) {
    this.api.getData<FotoRef[]>(`gallerie/${album.path}/foto-liste.json`, 'fotos')
      .subscribe( fotos => this.fotos = fotos);
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

    this.setBackgroundImage();
  }

  next(autoSlide: boolean = false) {
    this.autoSlide = autoSlide;
    if(this.fotos.length == 0) {
      return;
    }

    this.currentFotoIndex++;
    if(this.currentFotoIndex >= this.fotos.length) {
      this.currentFotoIndex = 0;
    }

    this.setBackgroundImage();
  }

  private setBackgroundImage() {
    const albumPath = this.albums[this.currentAlbumIndex].path;
    const fotoPath = this.fotos[this.currentFotoIndex].url;

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = `url("/gallerie/${albumPath}/${fotoPath}")`;
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
    this.intervalSubscription.unsubscribe();
  }

}
