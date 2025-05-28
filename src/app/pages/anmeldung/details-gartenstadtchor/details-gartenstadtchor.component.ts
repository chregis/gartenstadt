import {Component, input} from '@angular/core';

@Component({
  selector: '[app-details-gartenstadtchor]',
  standalone: false,
  templateUrl: './details-gartenstadtchor.component.html',
  styleUrl: './details-gartenstadtchor.component.css'
})
export class DetailsGartenstadtchorComponent {
  showLink = input<boolean>(true);

}
