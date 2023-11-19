import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

import { IPost } from 'src/app/interfaces/post.interface';
//import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() post!: IPost

  router = inject(Router)
  //postService = inject(PostServiceService);



  @Input() postSeleccionado!: IPost
  @Input() botonActivo = true;


  ngOnInit(): void {
    console.log(this.postSeleccionado);

  }

  constructor() {
    this.postSeleccionado = {
      id: 0, titulo: '', texto: '', autor: '', imagen: '', fecha: '', categoria: ''
    }
  }







  //  this.router.navigate['lista/post']
}
