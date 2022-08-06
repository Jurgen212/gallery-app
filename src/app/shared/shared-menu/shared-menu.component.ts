import { Component, OnInit } from '@angular/core';

interface menuItems {
  name: string; 
  path: string;
}

@Component({
  selector: 'app-shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrls: ['./shared-menu.component.css']
})
export class SharedMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuPrincipal: menuItems[] = [
    { name: 'Home'  , path: './principal/home'},
    { name: 'Photos', path: './principal/popular-photos'},
    { name: 'Videos', path: './principal/popular-videos'}
  ];

  menuDropdown: menuItems[] = [
    { name: 'Video search'  , path: './principal/search-videos' },
    { name: 'Photos search' , path: './principal/search-photos'}
  ]


  

}
