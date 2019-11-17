import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private apiService: AppService, private sharedService: SharedService) {

  }

  ngOnInit() {
    this.apiService.getProducts('products').subscribe(response => {
      this.sharedService.updateProducts(response);
    }, err => {
      alert('Error loading data from api');
    });
  }
}
