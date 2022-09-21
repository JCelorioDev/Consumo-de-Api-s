import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/Servicio/peliculas.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private peliculaService:PeliculasService) { }

  Title:any;
  Generos:any;
  Especifico:any;
  
  ngOnInit(): void {
    this.peliculaService.getAllGenres().subscribe({
      next:(s)=>{
        this.Generos = s.genres;
      },
      error: (e)=>{
        debugger
      }
    })
  }

  getTitleForMovies(Dato:any){
    this.peliculaService.getTitleForPelicula(Dato.value).subscribe({
      next:(s)=>{
        this.Title = s.results;
      },
      error: (e)=>{
        debugger
      }
    })
  }
  
  getDetailsOfMovie(ID:number){
    this.peliculaService.getDetailsOfMovies(ID).subscribe({
      next:(s)=>{
        this.Especifico = s;
      },
      error(e){
        debugger
      }
    })
  }

}
