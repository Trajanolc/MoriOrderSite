import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrdersDataService } from '../services/get-orders-data.service';
import { Order } from '../entities/order';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less'],
})
export class SideBarComponent implements OnInit {
  orderList: Order[] = [];

  constructor(private OrdersDataService: OrdersDataService) {}

  ngOnInit(): void {}

  @Output() event = new EventEmitter<Order[]>();

  getOrders(path: string) {
    this.OrdersDataService.getFromAPI(path).subscribe((orders) => {
      this.orderList = orders;
      this.event.emit(this.orderList)
    });
  }

  logout(){

  }


}
