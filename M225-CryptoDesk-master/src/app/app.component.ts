import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MenuItem} from "./interfaces/menu-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      link: '/home'
    },
    {
      label: 'Overview',
      icon: 'layers',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      link: '/overview'
    }
  ];

  ngOnInit() {
  }
}
