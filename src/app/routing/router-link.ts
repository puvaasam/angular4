

import { Routes } from '@angular/router';

import { ProductComponent } from '../components/product/product.component';
import { ProductListComponent } from '../components/product-list/product-list.component';

import { WorkInProgressComponent } from '../components/work-in-progress/work-in-progress.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { BlogComponent } from '../components/blog/blog.component';
import { ExampleComponent } from '../components/example/example.component';
import { OverviewComponent } from '../components/product-details/overview/overview.component';
import { SpecificationComponent } from '../components/product-details/specification/specification.component';




export const RouterPathList: Routes = [
    //{ path: '', component: HomeComponent, pathMatch: 'full' },
    //The order of the routes in the configuration matters and this is by design
    { path: 'product', component: ProductComponent, pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'wip', component: WorkInProgressComponent },
    { path: 'blog', component: BlogComponent },
    {
        path: 'product-list/:id', component: ProductDetailsComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'specification', component: SpecificationComponent }
        ]

    },
    { path: 'example', component: ExampleComponent },
    { path: '**', redirectTo: 'product' }
];

export const routedComponents = [ProductComponent, ProductListComponent, WorkInProgressComponent, ProductDetailsComponent, BlogComponent, ExampleComponent, OverviewComponent, SpecificationComponent  ];