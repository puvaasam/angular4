import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';


import { Post } from '../../data-type/post';
import { sacleDivAnimation, taskStateAnimation } from '../../animations/state-change.animation';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
  animations: [sacleDivAnimation, taskStateAnimation]
})
export class PostComponent implements OnInit {
  public posts: Post[];
  private _data = new BehaviorSubject<Post[]>([]);
  constructor() { }

  @Input()
  //data: Post[];
  get data(){
    return this._data.getValue();
  }
  set data(newValue){
    this._data.next(newValue);
  }

  ngOnInit() {
    //view will not show any data, because this oninit method get called before getting the responsen data from http request
    //this.posts = this.data;
    this._data.takeWhile(() => !this.posts).subscribe(next => {
      this.posts = next;
    });
  }
  ngOnChanges(changes: Post[]){
   //this.posts = this.data;
  }
  delete(index: number){
    this.posts[index].state = 'void';
    this.posts.splice(index, 1);
  }

  animateMe(post: Post) {
        post.state = (post.state === 'small' ? 'large' : 'small');
  }


}
