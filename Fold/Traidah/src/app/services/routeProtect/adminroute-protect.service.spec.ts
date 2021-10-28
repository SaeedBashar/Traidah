import { TestBed } from '@angular/core/testing';

import { AdminrouteProtectService } from './adminroute-protect.service';

describe('AdminrouteProtectService', () => {
  let service: AdminrouteProtectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminrouteProtectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
