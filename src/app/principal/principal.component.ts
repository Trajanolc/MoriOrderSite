import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarServiceService } from '../services/calendar-service.service';
import { OrdersDataService } from '../services/get-orders-data.service';
import { Order } from '../entities/order';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less'],
})
export class PrincipalComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  urlS3: string = 'https://imagens-refrigeracao.s3.us-east-2.amazonaws.com/';

  calendarService = new CalendarServiceService();
  orderDataService = new OrdersDataService(this.httpClient);

  @Input() orderList: Order[] = [];

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  updateOrder(order: Order) {

    order.obs = (<HTMLInputElement>document.getElementById('OBS - ' + order.ordemID)).value
    order.pat = (<HTMLInputElement>document.getElementById('PAT - ' + order.ordemID)).value
    order.funcionarioID = (<HTMLInputElement>document.getElementById('employee - ' + order.ordemID)).value
    this.orderDataService.updateOrder(order).subscribe((response) => {
      if (response.status == 200) {
        window.alert("Ordem nº  atualizada com sucesso!")
      }
    });
  }

  deleteOrder(order: Order) {

  }
}
