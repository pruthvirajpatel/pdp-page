import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PdpImageContainerService {

  constructor(private service: ApiService) { }

  getImages(id): Observable<any> {
    return this.service.get(`products/${id}/image`);
  }
}
