import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { POSTS } from '../db/posts.db';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  private arrPosts: IPost[] = POSTS;


  create(post: IPost) {
    this.arrPosts.push(post);
  }

  getAll(): IPost[] {
    return POSTS;
  }

  getCategorias(): string[] {
    return [...new Set(this.arrPosts.map(item => item.categoria))];
  }


  getByCategoria(categoria: string) {
    return this.arrPosts.filter(item => item.categoria === categoria)
  }

  getById(id: number) {
    return this.arrPosts.find(item => item.id === id)
  }

}

