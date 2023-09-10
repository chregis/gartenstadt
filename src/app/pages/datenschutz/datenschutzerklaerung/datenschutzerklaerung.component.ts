import { Component } from '@angular/core';
import {Kontakte} from "../kontakte";

@Component({
  selector: 'app-datenschutzerklaerung',
  templateUrl: './datenschutzerklaerung.component.html',
  styleUrls: ['./datenschutzerklaerung.component.css']
})
export class DatenschutzerklaerungComponent {
  public readonly Kontakte = Kontakte;
}
