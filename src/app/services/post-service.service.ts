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

  getByCategoria(categoria: string) {
    const arrFiltrados = [];
    for (let post of POSTS) {
      if (post.categoria === '') {
        return POSTS
      }
      if (post.categoria === categoria) {
        arrFiltrados.push(post)
      }
    }
    return arrFiltrados;

  }

  // enviarDatos(datos: any) {

  // }


}










// getAll(): IPost[] {
//    return this.arrPosts;

//  }

//  getByCategoria(categoria: string): IPost[] {
//    return this.arrPosts.filter(item => item.categoria === categoria);
//  }

//addPost(IPost): promise<string>{
//  return new Promise((resolve, reject) => {
//extraigo el array del local storage para poder introducir el nuevo post dentro de dicho array y devolverlo al localstorage.
//      const array
//    })
//  }




//}
