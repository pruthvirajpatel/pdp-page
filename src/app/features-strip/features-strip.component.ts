import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-strip',
  templateUrl: './features-strip.component.html',
  styleUrls: ['./features-strip.component.scss']
})
export class FeaturesStripComponent implements OnInit {
  deliveryTypes = [
    {
      image: 'free-shipping.png',
      type: 'Secure Payment'
    },
    {
      image: 'express-shipping.png',
      type: 'Express Shipping'
    },
    {
      image: 'free-shipping.png',
      type: 'Free Returns'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
