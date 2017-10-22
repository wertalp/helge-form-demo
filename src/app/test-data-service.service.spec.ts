/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   22-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 22-Oct-2017
 * @License: Licenced by PW @2016
 */



import { TestBed, inject } from '@angular/core/testing';

import { TestDataService } from './test-data-service.service';

describe('TestDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDataService]
    });
  });

  it('should be created', inject([TestDataService], (service: TestDataService) => {
    expect(service).toBeTruthy();
  }));
});
