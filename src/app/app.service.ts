import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api/api.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private service: ApiService) { }

    getProducts(url): Observable<any> {
        return this.service.get(url);
    }

}
