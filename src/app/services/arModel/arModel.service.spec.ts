/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArModelService } from './arModel.service';

describe('Service: ArModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArModelService]
    });
  });

  it('should ...', inject([ArModelService], (service: ArModelService) => {
    expect(service).toBeTruthy();
  }));
});
