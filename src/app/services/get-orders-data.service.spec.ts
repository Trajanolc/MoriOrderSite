import { TestBed } from '@angular/core/testing';

import { OrdersDataService } from './get-orders-data.service';

describe('GetOrdersDataService', () => {
  let service: OrdersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
