import { Component, OnInit, OnDestroy } from '@angular/core';

import { SharedDataService } from '../../services/common/shared-data.service';
import { RestApiService } from '../../services/api/rest-api.service';
import { TitleInfo } from '../../data-type/title-info';
import { MissionService } from '../../services/common/mission.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.less']
})
export class TitleBarComponent implements OnInit {

  public activeLink: TitleInfo;
  public rank: string = ''; 
  private subscription: Subscription;
  /**
   * 
   *  sharedDataService constructor
   */
  constructor(private sharedDataService: SharedDataService, private restApiService: RestApiService, private missionService: MissionService) {
    this.subscription = this.missionService.rankListener$.subscribe(next => {
      this.rank = next;
    });
   }
  ngOnInit() {
        this.activateLink();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('unsubscribe Rank Listener ');
  }
  private activateLink(){
        this.activeLink = this.sharedDataService.pageLinks[this.sharedDataService.activeHeaderLinkIdx];
  }

}
