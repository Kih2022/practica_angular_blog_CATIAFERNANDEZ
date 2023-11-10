import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private arrPost: IPost[] = [];


  create(post: IPost) {
    this.arrPost.push(post);
  }

  getAll(): IPost[] {
    return this.arrPost;

  }

  getByCategoria(categoria: string): IPost[] {
    return this.arrPost.filter(item => item.categoria === categoria);
  }


}
