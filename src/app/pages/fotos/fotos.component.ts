import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, map, Subscription} from "rxjs";
import {ApiService} from "../../shared/api/api.service";
import {ActivatedRoute} from "@angular/router";
import {AlbumRef} from "../../shared/foto/album-ref.model";
import {FotoRef} from "./foto-ref.model";
import {FotoService} from "../../shared/foto/foto.service";

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
  fotoDescription: string = '';
  copyright: string = '';

  constructor(private elementRef: ElementRef, private api: ApiService, private fotoService: FotoService, private route: ActivatedRoute) {

    this.fotoService.loadAlbumList();
    this.fotoService.getAlbumList().subscribe( albums => {
      this.albums = albums;
      if(this.albums.length > 0) {
        if(this.route.snapshot.params['albumId'] !== null) {
          const index = this.albums.findIndex( album => album.description == this.route.snapshot.params['albumId']);
          this.loadAlbum(index);
          return;
        }
        this.loadAlbum(0);
      }
    });

    this.intervalSubscription = interval(7000)
      .pipe(filter( () => this.autoSlide))
      .subscribe( () => this.nextFoto(true));

    this.route.params.pipe(
      filter( (params: any) => params.albumId != null),
      map( (params: any) =>  params.albumId)
    ).subscribe( albumId => {
      const foundIndex = this.albums.findIndex( album => album.description === albumId);
      if(foundIndex >= 0) {
        this.loadAlbum(foundIndex);
      }
    });
  }

  loadAlbum(albumIndex: number) {
    const album = this.albums[albumIndex];
    this.fotoService.loadAlbum(albumIndex);
    this.fotoService.getFotoList(albumIndex)
      .pipe( filter( fotos => fotos.length > 0))
      .subscribe( fotos => {
        console.log("Set fotos for album: ", album);
        this.fotos = fotos.sort( (a, b) => a.path.localeCompare(b.path));
        this.currentAlbumIndex = albumIndex;
        this.currentFotoIndex = 0;
        this.setBackgroundImage();
        this.setFotoDescription();
      });
  }

  previousFoto($event: MouseEvent) {
    // TODO menu wird auf dem Handy trotzdem eingeblendet!
    $event.preventDefault();
    $event.stopPropagation();

    this.autoSlide = false;
    if(!this.fotos) {
      return;
    }

    this.currentFotoIndex--;
    if(this.currentFotoIndex < 0) {
      this.currentFotoIndex = this.fotos.length-1;
    }

    this.setBackgroundImage();
    this.setFotoDescription();
  }

  nextFoto(autoSlide: boolean = false, $event?: Event) {
    $event?.preventDefault();
    $event?.stopPropagation();
    this.autoSlide = autoSlide;
    if(this.fotos.length == 0) {
      return;
    }

    this.currentFotoIndex++;
    if(this.currentFotoIndex >= this.fotos.length) {
      this.currentFotoIndex = 0;
    }

    this.setBackgroundImage();
    this.setFotoDescription();
  }

  private setBackgroundImage() {
    const albumPath = this.albums[this.currentAlbumIndex].path;
    const fotoPath = this.fotos[this.currentFotoIndex].path;

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = `url("/gallerie/${albumPath}/${fotoPath}")`;
  }

  private setFotoDescription() {
    const fotoRef = this.fotos[this.currentFotoIndex];
    const fotoPath = fotoRef.path;
    let descriptionFromPath, copyright;
    let parts = fotoPath.split("/");
    parts = parts.slice(0, parts.length-1); // remove file-name
    [descriptionFromPath, copyright] = parts;
    descriptionFromPath = descriptionFromPath.replace(/\d*\w/, "");
    this.fotoDescription = fotoRef.description || descriptionFromPath || '';
    this.copyright = copyright || '';

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
