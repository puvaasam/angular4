import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TitleInfo } from '../../data-type/title-info';
import { Product } from '../../data-type/product';
import { HttpService } from './core/http.service';

// Import RxJs required methods

@Injectable()
export class RestApiService {
 /**
  * 
  *  http constructor
  */
  
  constructor(private httpApi: HttpService) { }



  getPageTitles(): Observable<TitleInfo[]>{
      
      let pageTitleUrl: string = '../../../assets/data/mock-page-link.json';
      return this.httpApi.getData(pageTitleUrl);
  }

 getProductList(): Observable<Product[]>{
      
      let pageTitleUrl: string = '../../../assets/data/mock-product-list.json';
      return this.httpApi.getData(pageTitleUrl);
  }
  getBlogPosts(): any{
      let blogPosts: string = '../../../assets/data/mock-posts.json';
      return this.httpApi.getData(blogPosts);
  }
  
  
  
}
