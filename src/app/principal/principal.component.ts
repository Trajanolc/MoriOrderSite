import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarServiceService } from '../services/calendar-service.service';
import { OrdersDataService } from '../services/get-orders-data.service';
import { Credentials } from '../entities/credentials';
import { Order } from '../entities/order';
import { disableDebugTools } from '@angular/platform-browser';


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
  credentials = new Credentials("",""); //TODO get from cookies

  @Input() orderList: Order[] = [];

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  updateOrder(order: Order) {

    order.obs = (<HTMLInputElement>document.getElementById('OBS - ' + order.ordemID)).value
    order.pat = (<HTMLInputElement>document.getElementById('PAT - ' + order.ordemID)).value
    order.funcionarioID = (<HTMLInputElement>document.getElementById('employee - ' + order.ordemID)).value

    this.orderDataService.updateOrder(order,this.credentials).subscribe(
      (response) => {
      if (response.status == 200) { window.alert("Ordem nº  atualizada com sucesso!") }
    },
    (err:Error)=>{
      let message = err.message;
      if(message.includes("401") || message.includes("403")) { this.loginDialog()}

    }
    );

  }
  deleteOrder(order: Order) {

  }



  loginDialog(){
    //Appply to login cookie
    (<HTMLDialogElement>document.getElementById("login-dialog")).open = true;
  }

  submitLogin(){

      this.orderDataService
  }
}
