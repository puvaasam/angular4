import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class MissionService {

  // observable source
  private rankListener = new Subject<string>();

  //Observable stream
  rankListener$ = this.rankListener.asObservable();

  constructor() { }

  updateRank(rank: string){
    this.rankListener.next(rank);
  }
  

}
