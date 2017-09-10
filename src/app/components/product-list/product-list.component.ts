import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestApiService } from '../../services/api/rest-api.service';
import { SharedDataService } from '../../services/common/shared-data.service';
import { Product } from '../../data-type/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  private productList: Product[];
  constructor(
    private restApiService: RestApiService,
    private sharedDataService: SharedDataService,

    private router: Router
    ) { }

  ngOnInit() {
      this.restApiService.getProductList().subscribe(next =>{
          this.productList = next;
          this.sharedDataService.productList = next;
      }, err => {
        console.log('Error ', err);
      });
  }
  onSelectProduct(idx: string): void{
    this.router.navigate(['/product-details', idx]);
    //alert("Product : "+ idx);
  }

}
