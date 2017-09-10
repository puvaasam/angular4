import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { SharedDataService } from '../../../services/common/shared-data.service';
import { Product } from '../../../data-type/product';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {

   public productDetails: Product;
  constructor(
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService
    ) { }

  ngOnInit() {
      this.productDetails = this.sharedDataService.productList[this.route.snapshot.parent.params['id']];

  }
  ngOnDestroy(){
    console.log(' ngOnDestroy');
  }
}
