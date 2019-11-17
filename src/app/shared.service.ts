import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public products: BehaviorSubject<Array<any>> = new BehaviorSubject<any>([]);
  products$ = this.products.asObservable();

  updateProducts(data): void {
    this.products.next(data);
  }

}
