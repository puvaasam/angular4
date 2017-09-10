import { Component, OnInit } from '@angular/core';
import { Post } from '../../data-type/post';
import { RestApiService } from '../../services/api/rest-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent  implements OnInit {
  posts: Post[]; 
  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
   this.restApiService.getBlogPosts().subscribe(data =>{
    this.posts = data;
   }, err =>{

   }, complete =>{
      console.log('done');
   })
  }
  addPosts(event){
    this.posts.unshift(event.post);
  }
  
}

