import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { PdpImageContainerService } from './pdp-image-container.service';

@Component({
  selector: 'app-pdp-image-container',
  templateUrl: './pdp-image-container.component.html',
  styleUrls: ['./pdp-image-container.component.scss']
})
export class PdpImageContainerComponent implements OnInit {
  activeImage;
  activeIndex = 0;
  thumbNails = [];
  constructor(
    private sharedService: SharedService,
    private pdpImageContainerService: PdpImageContainerService) { }

  ngOnInit() {

    this.sharedService.products$.subscribe(data => {
      if (data && data.length) {
        this.pdpImageContainerService.getImages(data[0].id).subscribe(
          result => {
            this.thumbNails = result;
            this.activeImage = this.thumbNails[0].url;
          }, err => {

          });
      }
    });
  }

  setActiveImageAndIndex(index): void {
    this.activeIndex = index;
    this.activeImage = this.thumbNails[index].url;
  }

  setActiveIndex(index): void {
    this.setActiveImageAndIndex(this.activeIndex + index);
  }
}
