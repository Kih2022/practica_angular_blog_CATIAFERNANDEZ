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
      id: new FormControl(null, [Validators.required, Validators.min(5), Validators.pattern(/^[0-9]\d*$/)]),
      titulo: new FormControl(null, []),
      texto: new FormControl(null, []),
      autor: new FormControl(null, []),
      imagen: new FormControl(null, []),
      fecha: new FormControl(null, []),
      category: new FormControl(null, []),

    })
  }

  onSubmit() { //aqui lanzamos la peticion para que me cree el post
    // return this.postForm.value;

    // this.postService.create(this.postForm.value);

    const valoresFormulario = this.postForm.value;
    this.postService.create(valoresFormulario)
    this.router.navigate(['posts'])
  }





}
