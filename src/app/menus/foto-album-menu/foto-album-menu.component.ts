import { Component, OnInit } from '@angular/core';
import {FotoService} from "../../shared/foto/foto.service";

@Component({
  selector: 'app-foto-album-menu',
  templateUrl: './foto-album-menu.component.html',
  styleUrls: ['./foto-album-menu.component.css']
})
export class FotoAlbumMenuComponent implements OnInit {

  albums = this.fotoService.getAlbumList();
  constructor(private fotoService: FotoService) { }

  ngOnInit(): void {
  }

}
