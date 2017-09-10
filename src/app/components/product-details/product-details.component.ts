import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedDataService } from '../../services/common/shared-data.service';
import { Product } from '../../data-type/product';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public productDetails: Product;
  private subscription: Subscription;
  constructor(
   
    ) { }

  ngOnInit() {
    // this.subscription = this.route.params.switchMap((params: Params)=> params['id']).subscribe((id: string) =>{
    //     this.productDetails = this.sharedDataService.productList[id];
    // });
  }
  ngOnDestroy(){
    console.log(' ngOnDestroy');
   
  }

}
