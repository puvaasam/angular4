export class Post {
  constructor(
    public title: string,
    public type: string,
    public author?: string,
    public id?: number,
    public state?: string
  ) {  }
}