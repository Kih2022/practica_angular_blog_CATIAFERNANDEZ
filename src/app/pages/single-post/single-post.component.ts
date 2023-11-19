import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  postSeleccionado: IPost | undefined;
  router = inject(Router);
  //arrpost: IPost[] = [];

  activatedRoute = inject(ActivatedRoute);
  postService = inject(PostServiceService);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // return this.postService.getByCategoria((params['posts']))
      // this.postSeleccionado = this.postService.getByCategoria(parseInt(params['readme']))
      this.postSeleccionado = this.postService.getById(Number(params['postId']));
      console.log(this.postSeleccionado);



    });
  }



}
