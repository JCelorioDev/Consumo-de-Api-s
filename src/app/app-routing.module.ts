import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './Paginas/autor/autor.component';
import { PeliculasComponent } from './Paginas/peliculas/peliculas.component';
const routes: Routes = [
  {path: 'autor', component: AutorComponent},
  {path: 'peliculas', component: PeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
