import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pdp-details-filters',
  templateUrl: './pdp-details-filters.component.html',
  styleUrls: ['./pdp-details-filters.component.scss']
})
export class PdpDetailsFiltersComponent implements OnInit {
  product = {};
  selectedColor = 'blue.png';
  sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
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
  constructor(private sharedService: SharedService) { }

  ngOnInit() {

    this.sharedService.products$.subscribe(data => {
      if (data && data.length) {
        this.product = data[0];
      }
    });
  }

}
