import { TestBed } from '@angular/core/testing';

import { GetOrdersDataService } from './get-orders-data.service';

describe('GetOrdersDataService', () => {
  let service: GetOrdersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrdersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
