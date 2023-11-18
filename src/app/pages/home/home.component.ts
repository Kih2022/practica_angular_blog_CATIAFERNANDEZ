import { Component, inject } from '@angular/core';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrpost: IPost[] = [];
  arrCategorias: string[] = [];

  postService = inject(PostServiceService);



  ngOnInit() {
    this.arrpost = this.postService.getAll();
    // console.log(this.arrpost);


  }

  onChange($event: any) {
    this.arrpost = this.postService.getByCategoria($event.target.value);
  }








}
