import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-categorias-nav-bar',
  templateUrl: './categorias-nav-bar.component.html',
  styleUrls: ['./categorias-nav-bar.component.css']
})
export class CategoriasNavBarComponent {

  router = inject(Router)
  postService = inject(PostServiceService)
}
