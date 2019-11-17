import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { RecommendedProductsService } from './recommended-products.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {
  activeIndex = 0;
  products = [];
  constructor(
    private sharedService: SharedService,
    private recommendedProductsService: RecommendedProductsService) { }

  ngOnInit() {
    this.sharedService.products$.subscribe(data => {
      if (data && data.length) {
        this.products = data;
        this.getProductImages();
      }
    });
  }

  getProductImages(): void {
    const images = [];
    const getImages = (id) => {
      return this.recommendedProductsService.getProducts(id).pipe(catchError((err) => of([])));
    };
    this.products.forEach(data => {
      images.push(getImages(data.id));
    });
    forkJoin(images).subscribe(imagesList => {
      for (let index = 0; index < imagesList.length; index++) {
        const product = imagesList[index];
        if (product.length) {
          this.products[index].url = product[0].url;
        }
      }
    });
  }
}
