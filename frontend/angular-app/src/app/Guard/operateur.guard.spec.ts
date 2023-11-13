import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { operateurGuard } from './operateur.guard';

describe('operateurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => operateurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
