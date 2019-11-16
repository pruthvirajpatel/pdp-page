import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdp-image-container',
  templateUrl: './pdp-image-container.component.html',
  styleUrls: ['./pdp-image-container.component.scss']
})
export class PdpImageContainerComponent implements OnInit {
  activeImage = 'active.png';
  activeIndex = 0;
  thumbNails = [
    'OCA_Low_Red_Canvas_Sneaker_Men_1.png',
    'OCA_Low_Red_Canvas_Sneaker_Men_2.png',
    'OCA_Low_Red_Canvas_Sneaker_Men_3.png',
    'OCA_Low_Red_Canvas_Sneaker_Men_4.png',
    'OCA_Low_Red_Canvas_Sneaker_Men_5.png',
    'OCA_Low_Red_Canvas_Sneaker_Men_6.png'
  ];
  constructor() { }

  ngOnInit() {
  }

  setActiveImageAndIndex(index): void {
    this.activeIndex = index;
    this.activeImage = this.thumbNails[index];
  }

  setActiveIndex(index): void {
    this.setActiveImageAndIndex(this.activeIndex + index);
  }
}
