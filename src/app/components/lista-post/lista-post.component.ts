import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent {

  arrpost: IPost[] = [];

  postSeleccionado: IPost | undefined;

  activatedRoute = inject(ActivatedRoute);
  postService = inject(PostServiceService);

  ngOnInit() {
    this.arrpost = this.postService.getAll();
    console.log(this.arrpost);
  }




}
