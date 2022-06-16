import { TestBed } from '@angular/core/testing';

import { GreysolutionServceService } from './greysolution-servce.service';

describe('GreysolutionServceService', () => {
  let service: GreysolutionServceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreysolutionServceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
