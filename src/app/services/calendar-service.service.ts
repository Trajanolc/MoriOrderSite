import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {

  constructor() { }

  getFormatedDate (epoch: number){
    var date = new Date(epoch);
    var formatedDate = Intl.DateTimeFormat(['ban', 'id']).format(date);
    return formatedDate;
  }
}
