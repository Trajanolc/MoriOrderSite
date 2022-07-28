import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less'],
})
export class PrincipalComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  urlS3: string = 'https://imagens-refrigeracao.s3.us-east-2.amazonaws.com/';

  @Input() orderList: Order[] = [];

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
