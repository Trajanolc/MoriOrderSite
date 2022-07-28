import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetOrdersDataService {


  private url = 'http://moriapi-env.eba-4vryvnng.us-east-2.elasticbeanstalk.com/'

  constructor(private httpClient: HttpClient) { }

  public getFromAPI(path: string) {
     return this.httpClient.get<Order[]>(this.url+path);
  }
}
