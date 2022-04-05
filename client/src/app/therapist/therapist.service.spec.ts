import { TestBed } from '@angular/core/testing';

import { TherapistService } from './therapist.service';

describe('TherapistService', () => {
  let service: TherapistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TherapistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
