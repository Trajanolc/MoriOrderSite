import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Order } from '../entities/order';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  private url = 'http://moriapi-env.eba-4vryvnng.us-east-2.elasticbeanstalk.com/';
  //private url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public getFromAPI(path: string) {
     return this.httpClient.get<Order[]>(this.url+path);
  }

  updateOrder(order: Order){

    let payload = JSON.stringify(order);
    let header = new HttpHeaders().set('content-type', 'application/json');
    console.log(payload);

    return this.httpClient.patch(this.url+"orders",payload,{'headers':header,'observe':'response'});
  }
}
