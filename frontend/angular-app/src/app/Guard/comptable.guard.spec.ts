import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { comptableGuard } from './comptable.guard';

describe('comptableGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => comptableGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
