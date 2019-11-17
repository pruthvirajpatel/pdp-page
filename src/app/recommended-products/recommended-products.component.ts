import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {
  products = [
    {
      imageUrl: 'recommend-1.png',
      name: 'White Canvas',
      price: '$78',
      label: 'Los Angeles Favorite'
    },
    {
      imageUrl: 'recommend-2.png',
      name: 'Grey Suede',
      price: '$78'
    },
    {
      imageUrl: 'recommend-3.png',
      name: 'White Canvas',
      price: '$78',
      label: 'Sold out'
    },
    {
      imageUrl: 'recommend-2.png',
      name: 'Grey Suede',
      price: '$78'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
