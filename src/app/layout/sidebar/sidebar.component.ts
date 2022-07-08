import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('toggleBox', [
      // ...
      state(
        'open',
        style({
          height: '30px',
        })
      ),
      state('closed', style({})),
      transition('open => closed', [animate('.3s')]),
      transition('closed => open', [animate('0.3s')]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  public homeContent = false;
  public pages: any;
  public isOpen: any;
  public shop: any;
  constructor() {}

  ngOnInit(): void {}
  showHome() {
    this.isOpen = !this.isOpen;
    this.homeContent = !this.homeContent;
    console.log(this.isOpen);
  }
  showPage() {
    this.isOpen = !this.isOpen;
    this.pages = !this.pages;
  }
  showShop() {
    this.isOpen = !this.isOpen;
    this.shop = !this.shop;
  }
}
