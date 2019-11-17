import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendedProductsService {

  constructor(private service: ApiService) { }

  getProducts(id): Observable<any> {
    return this.service.get(`products/${id}/image`);
  }
}
