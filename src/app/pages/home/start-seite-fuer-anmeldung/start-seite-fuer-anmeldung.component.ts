import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-start-seite-fuer-anmeldung',
  templateUrl: './start-seite-fuer-anmeldung.component.html',
  styleUrls: ['./start-seite-fuer-anmeldung.component.css']
})
export class StartSeiteFuerAnmeldungComponent {
  protected readonly environment = environment;
}
