import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public counter = 0;
  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void { }
  btn() {
    let data = this.layoutService.counter()
    console.log(data);
  }
}
