import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Post } from './post';
import { slideInOutAnimation } from '../../animations/slide-in-out.animation';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'blog-post-form',
  templateUrl: './blog-post-form.component.html',
  styleUrls: ['./blog-post-form.component.less'],
  // animations: [slideInOutAnimation, fadeInAnimation],
  // host: { '[@slideInOutAnimation]': '','[@fadeInAnimation]': '' }
})
export class BlogPostFormComponent implements OnInit {
  post: Post;

  @Output()
  invokeUpdatePostfn: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.post = new Post('', '');
  }
  onSubmit() {
    console.log('Save post');
    //invoke parent component fn from child
    this.post.state = 'small';
    this.invokeUpdatePostfn.emit({ post: this.post });
    this.post.title = '';
    this.post.type = '';
  }

}
