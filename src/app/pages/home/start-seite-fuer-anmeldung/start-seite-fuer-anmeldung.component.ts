import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-seite-fuer-anmeldung',
  templateUrl: './start-seite-fuer-anmeldung.component.html',
  styleUrls: ['./start-seite-fuer-anmeldung.component.css']
})
export class StartSeiteFuerAnmeldungComponent implements OnInit {
  deadlineReached: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
