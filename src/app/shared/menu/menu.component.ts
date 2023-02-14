import {Component, Input, OnInit} from '@angular/core';

export interface MenuItem {
  routerLink: string;
  name: string;

  scrollTo?: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  constructor() { }

  ngOnInit(): void {
  }

}
