import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/Servicio/peliculas.service';
@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  Autor:any;

  constructor(private peliculaService:PeliculasService) { }
  ngOnInit(): void {
  }

  getDetailsOfAutor(Dato:any){
    this.peliculaService.getDetailsOfAutor(Dato.value).subscribe({
      next:(s)=>{
        this.Autor = s.results;
        debugger
      },
      error(e){
        debugger;
      }
    })
  }

}
