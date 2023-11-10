import { Component, inject } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  postService = inject(PostServiceService)
  router = inject(Router)

  postForm: FormGroup;

  constructor() {
    this.postForm = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.maxLength(18)]),
      texto: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),

    })
  }

  onSubmit() {
    return this.postForm.value;
  }


}
