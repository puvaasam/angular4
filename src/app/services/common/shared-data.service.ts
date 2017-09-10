import { Injectable, OnDestroy } from '@angular/core';

import { Observable, Subscription, Subscriber } from 'rxjs/Rx';

import { TitleInfo } from '../../data-type/title-info';
import { Product } from '../../data-type/product';
import { RestApiService } from '../api/rest-api.service';


@Injectable()
export class SharedDataService implements OnDestroy{

  public activeHeaderLinkIdx: number;
  private _pageLinks: TitleInfo[];
  private _productList: Product[];
  private subscription: Subscription;
  private sub: Subscriber<any>;

  constructor(private restApiService: RestApiService) { }

  set pageLinks(links: TitleInfo[]){
      this._pageLinks = links;
  }
  get pageLinks(): TitleInfo[]{
      return this._pageLinks;
  }
  get productList(): Product[]{
      return this._productList;
  }
  set productList(list: Product[]){
      this._productList = list;
  }


  public loadPageLinks(): Promise<any[]>{
      /**
       * app.routing.module need promise to resolve the app initializer factory fn
       */
        return new Promise((resolve, reject) =>{
            this.subscription = this.restApiService.getPageTitles().subscribe(next => {
                this.pageLinks = next;
                this.activeHeaderLinkIdx = 0;
                resolve(next);
                console.log('loadPageLinks response');
            }, err =>{
                reject(err);
            });
        });
  }

  public unSubscribePageLinks(){
    this.subscription.unsubscribe();
    
  }
  ngOnDestroy(){
      console.log('ondestory service');
  }

}
