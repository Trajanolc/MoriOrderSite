import { Component, ViewChild } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Order } from './entities/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'test-list';

  @ViewChild(SideBarComponent, { static: false })
  sidebar!: SideBarComponent;

  orderList: Order[] = [];

  getOrdersFromAPI($event: Order[]) {
    this.orderList = $event
  }


}
