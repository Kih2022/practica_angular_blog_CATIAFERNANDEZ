import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private arrPosts: IPost[] = [];


  create(post: IPost) {
    this.arrPosts.push(post);
  }

  getAll(): IPost[] {
    return this.arrPosts;

  }

  getByCategoria(categoria: string): IPost[] {
    return this.arrPosts.filter(item => item.categoria === categoria);
  }


}
