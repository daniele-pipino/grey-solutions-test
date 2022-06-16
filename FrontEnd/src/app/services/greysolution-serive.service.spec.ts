import { TestBed } from '@angular/core/testing';

import { GreysolutionSeriveService } from './greysolution-serive.service';

describe('GreysolutionSeriveService', () => {
  let service: GreysolutionSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreysolutionSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
