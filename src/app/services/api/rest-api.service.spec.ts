import { TestBed, inject } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import { HttpService } from './core/http.service';

describe('TitleApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiService, HttpService]
    });
  });

  it('should be created', inject([RestApiService], (service: RestApiService) => {
    expect(service).toBeTruthy();
  }));
});
