import { Component } from '@angular/core';
import {Kontakte} from "../kontakte";

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent {

  constructor() { }

  public readonly Kontakte = Kontakte;
}
