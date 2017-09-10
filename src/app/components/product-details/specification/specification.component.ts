import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params } from '@angular/router';
import { SharedDataService } from '../../../services/common/shared-data.service';
import { Product } from '../../../data-type/product';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.less']
})
export class SpecificationComponent implements OnInit {

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
