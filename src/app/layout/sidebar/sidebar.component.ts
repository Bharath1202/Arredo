import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu/menu';
import { sidebarNav } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  collapsed = true
  navData = sidebarNav

}
