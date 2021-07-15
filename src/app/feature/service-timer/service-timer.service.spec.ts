import { TestBed } from '@angular/core/testing';

import { ServiceTimerService } from './service-timer.service';

describe('ServiceTimerService', () => {
  let service: ServiceTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
