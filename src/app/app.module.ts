import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostComponent } from './components/lista-post/lista-post.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategoriasNavBarComponent } from './components/categorias-nav-bar/categorias-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostComponent,
    FormularioComponent,
    NavBarComponent,
    CategoriasNavBarComponent,
    FooterComponent,
    PostCardComponent,
    SinglePostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
