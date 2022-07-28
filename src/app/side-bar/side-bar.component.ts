import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetOrdersDataService } from '../get-orders-data.service';
import { Order } from '../order';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less'],
})
export class SideBarComponent implements OnInit {
  orderList: Order[] = [];

  constructor(private getOrdersDataService: GetOrdersDataService) {}

  ngOnInit(): void {}

  @Output() event = new EventEmitter<Order[]>();

  getOrders(path: string) {
    this.getOrdersDataService.getFromAPI(path).subscribe((orders) => {
      this.orderList = orders;
      this.event.emit(this.orderList)
    });
  }
}
