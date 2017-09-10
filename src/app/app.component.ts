import { Component, OnInit } from '@angular/core';

import { SharedDataService } from './services/common/shared-data.service';
import { RestApiService } from './services/api/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private sharedDataService: SharedDataService, private restApiService: RestApiService ){

  }

  ngOnInit(){
  }
  ngAfterViewInit(){
  }
}
