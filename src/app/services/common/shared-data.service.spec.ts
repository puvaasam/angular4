import { TestBed, inject } from '@angular/core/testing';
// import { Http, Headers, RequestOptions, Response} from '@angular/http';

import { SharedDataService } from './shared-data.service';
// import { RestApiService } from '../api/rest-api.service';

// import { HttpService } from '../api/core/http.service';

describe('SharedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedDataService]
    });
  });

  it('should be created', inject([SharedDataService], (service: SharedDataService) => {
    expect(service).toBeTruthy();
  }));
});
