/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingService } from './Accounting.service';

describe('Service: Accounting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingService]
    });
  });

  it('should ...', inject([AccountingService], (service: AccountingService) => {
    expect(service).toBeTruthy();
  }));
});
