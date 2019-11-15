import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdp-details-filters',
  templateUrl: './pdp-details-filters.component.html',
  styleUrls: ['./pdp-details-filters.component.scss']
})
export class PdpDetailsFiltersComponent implements OnInit {
  selectedColor = 'blue.png';
  colors = [
    'semi-brown.png',
    'light-brown.png',
    'violet.png',
    'blue.png',
    'brown.png',
    'light-blue.png',
    'black.png',
    'semi-brown.png',
    'light-brown.png',
    'violet.png',
    'brown.png'
  ];
  constructor() { }

  ngOnInit() {
  }

}
