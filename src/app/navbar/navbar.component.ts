import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  styles: any = [];

  @Input('tab') tab: string;

  constructor() {
    this.styles[1] = {};
    this.styles[2] = {};
    this.styles[3] = {};
    this.styles[4] = {};
    this.styles[5] = {};
    this.styles[6] = {};
  }

  ngOnInit() {
    this.styles[this.tab] = {
      'opacity': '0.9'
    };
  }

}
