import { NgModule } from '@angular/core';

import { FooterComponent } from '../components/footer/footer.component';

import { HttpService } from '../services/api/core/http.service';
import { RestApiService } from '../services/api/rest-api.service';



@NgModule({
    imports:[],
    declarations:[],
    providers: [ RestApiService, HttpService ],
})

export class AppSharedModule{

}