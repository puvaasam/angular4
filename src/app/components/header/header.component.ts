import { Component, OnInit, OnDestroy } from '@angular/core';



import { AppConstant } from '../../config/constant/app.constant';
import { RestApiService } from '../../services/api/rest-api.service';
import { SharedDataService } from '../../services/common/shared-data.service';
import { TitleInfo } from '../../data-type/title-info';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [],
    styleUrls: ['./header.component.less']

})

export class HeaderComponent implements OnInit, OnDestroy {

    constructor(private restApiService: RestApiService, private sharedDataService: SharedDataService) {

    }
    ngOnInit() {
    }
    ngOnDestroy() {
        //this.sharedDataService.unSubscribePageLinks();
    }

}