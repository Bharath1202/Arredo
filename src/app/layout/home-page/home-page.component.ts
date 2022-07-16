import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @Output() public sendDta = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  btn() {
    let counter = 0;
    this.sendDta.emit((counter += 1));
  }
}
