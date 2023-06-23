import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, take} from "rxjs";
import {AlbumRef} from "./album-ref.model";
import {ApiService} from "../api/api.service";
import {FotoRef} from "../../pages/fotos/foto-ref.model";

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  albumList: BehaviorSubject<AlbumRef[]> = new BehaviorSubject<AlbumRef[]>([]);
  fotoListOfAlbum: Map<number, BehaviorSubject<FotoRef[]>> = new Map();

  constructor(private api: ApiService) { }

  getAlbumList(): Observable<AlbumRef[]> {
    return this.albumList.asObservable();
  }

  loadAlbumList() {
    this.api.getData<AlbumRef[]>('gallerie/album-liste.json', 'albums')
      .subscribe( albums => this.albumList.next(albums));
  }

  loadAlbum(albumIndex: number) {
    this.getAlbumList().pipe( take(1) )
      .subscribe( albumList => {
        if(albumIndex > albumList.length) {
          return;
        }
        const album = albumList[albumIndex];
        this.api.getData<FotoRef[]>(`gallerie/${album.path}/foto-liste.json`, 'fotos')
          .subscribe( fotos => {
            this.getFotoList(albumIndex);
            this.fotoListOfAlbum.get(albumIndex)?.next(fotos)
          });
      });
  }

  getFotoList(albumIndex: number): Observable<FotoRef[]> {
    if(!this.fotoListOfAlbum.has(albumIndex)) {
      this.fotoListOfAlbum.set(albumIndex, new BehaviorSubject<FotoRef[]>([]));
    }
    return this.fotoListOfAlbum.get(albumIndex)?.asObservable() as Observable<FotoRef[]>;
  }
}
