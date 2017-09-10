import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Router, RouterModule, Event, NavigationStart } from '@angular/router';


import { RouterPathList } from '../routing/router-link';
import { SharedDataService } from '../services/common/shared-data.service';
import { MissionService } from '../services/common/mission.service';


import { AppConstant } from '../config/constant/app.constant';

export function loadPromise(sharedApi: SharedDataService) {
  return function(){
    return sharedApi.loadPageLinks();
  }  
}

@NgModule({
  imports: [
     RouterModule.forRoot(RouterPathList),
     
  ],
  exports: [ RouterModule ],
  providers: [SharedDataService, {
      provide: APP_INITIALIZER,
      useFactory: loadPromise,
      deps: [SharedDataService], multi: true  
    }, MissionService],
  declarations: []
})

export class AppRoutingModule { 
    constructor(private router: Router, private sharedDataService: SharedDataService){
        this.initiateEventListener();
       
  }
  initiateEventListener(): void{
      this.router.events.filter((evt: Event) => evt instanceof NavigationStart).map((ev: any) => ev.url).subscribe(url =>{
          console.log('Router Link End @ ', url);
          url = url !== '/'? url: AppConstant.HOME;
          if(this.sharedDataService.pageLinks !== undefined)
          console.log('previous state '+this.router.routerState);
            this.sharedDataService.activeHeaderLinkIdx = this.sharedDataService.pageLinks.findIndex(value => '/'+value.link === url);
          

        });
  }
}