import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public counter = 0;
  constructor(private layoutService: LayoutService) { }


  ngOnInit(): void {
    console.log(this.layoutService.counter());

    // this.counter = this.layoutService.counter()
  }
}
