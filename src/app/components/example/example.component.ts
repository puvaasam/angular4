import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../services/common/mission.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less']
})
export class ExampleComponent implements OnInit {

  constructor(private missionService: MissionService) { }

  ngOnInit() {
  }
  addToStream(){
    this.missionService.updateRank(Math.floor(new Date().getTime() / 1000)+'');
  }

}
