import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent {

  arrpost: IPost[] = [];
  arrCategorias: string[] = [];

  postService = inject(PostServiceService);
  // router = inject(Router)

  //postSeleccionado: IPost | undefined;

  @Output() postSeleccionado: EventEmitter<IPost> = new EventEmitter




  ngOnInit() {
    this.arrpost = this.postService.getAll();
    this.arrCategorias = this.postService.getCategorias();
  }

  onClick(post: IPost) {
    this.postSeleccionado.emit(post)
  }


  onChange($event: any) {
    this.arrpost = this.postService.getByCategoria($event.target.value);
  }


}
