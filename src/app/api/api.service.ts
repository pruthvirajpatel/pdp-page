import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getOptions(data): any {
    const options = {
      withCredentials: true,
      params: null
    };
    return options;
  }

  getBaseUrl(url) {
    return environment.baseUrl + url;
  }

  // url -> api url,baseUrl -> Base url for the api, data -> params
  get(url, data?: any) {
    return this.httpClient.get(`${this.getBaseUrl(url)}`, this.getOptions(data));
  }

  post(url, data?: object) {
    return this.httpClient.post(`${this.getBaseUrl(url)}`, data, this.getOptions(null));
  }

}
