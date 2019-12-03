import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerList;
  constructor() { }

  ngOnInit() {
    this.footerList = {
      men: [
        'OCA Low',
        'OCA High',
        'CATIBA Low',
        'CATIBA High'
      ],
      women: [
        'OCA Low',
        'OCA High',
        'CATIBA Low',
        'CATIBA High'
      ],
      support: [
        'FAQ',
        'Returns',
        'Live Chat'
      ],
      about: [
        'Mission',
        'Vision',
        'Future'
      ],
      'pop up stores': [
        'Find near you',
        'Register'
      ],
      newsletter: []
    };
  }
  defaultSorting(): any {
    return 0;
  }

}
