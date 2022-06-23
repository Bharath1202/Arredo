import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('toggleBox', [
      // ...
      state('open', style({
        height: '200px',
        // backgroundColor: '#061ff0'
      })),
      state('closed', style({
        height: '70px',
        // backgroundColor: '#E91E63',
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ])
  ]
})

export class SidebarComponent implements OnInit {

  public homeContent = false
  public pages: any
  public isOpen: any;


  constructor() { }

  ngOnInit(): void {
  }
  // showHome() {

  //   this.homeContent = !this.homeContent
  // }
  showPage() {
    this.pages = !this.pages
  }
  showHome() {
    this.isOpen = !this.isOpen;
    this.homeContent = !this.homeContent
    console.log(this.isOpen)
  }

}

