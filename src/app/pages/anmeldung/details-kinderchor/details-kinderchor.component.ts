import {Component, input} from '@angular/core';

@Component({
  selector: '[app-details-kinderchor]',
  standalone: false,
  templateUrl: './details-kinderchor.component.html',
  styleUrl: './details-kinderchor.component.css'
})
export class DetailsKinderchorComponent {

  showLink = input<boolean>(true);

}
