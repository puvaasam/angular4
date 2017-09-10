import { Component, OnInit, OnDestroy } from '@angular/core';


import { MissionService } from '../../../services/common/mission.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.less']
})
export class CountdownTimerComponent implements OnInit {
  public message: string = '';
  public rank: string = '';
  private subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = this.missionService.rankListener$.subscribe(next => {
      this.rank = next;
    });
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('unsubscribe Rank Listener ');
  }
  invokeChildA(){
    this.message = 'Start Button Clicked';
    this.clearMessage();
  }
  invokeChildB(){
    this.message = 'Stop Button Clicked';
    this.clearMessage();
  }
  clearMessage(){
    setTimeout(()=> {
      this.message = '';
    }, 2000);
    
  }
 
}
