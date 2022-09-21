import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  ApiUrl = "https://api.themoviedb.org/3/";

  constructor(private http:HttpClient) { }

  getTitleForPelicula(Name:string){
    return this.http.get<any>(this.ApiUrl + "search/movie?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&query=" + Name  + "&page=1&include_adult=true")
  }

  getDetailsOfAutor(Name:string){
    return this.http.get<any>(this.ApiUrl + "search/person?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&query=" + Name + "&page=&include_adult=true")
  }

  getAllGenres(){
    return this.http.get<any>(this.ApiUrl + "genre/movie/list?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-Es");
  }

  getDetailsOfMovies(N:number){
    return this.http.get<any>(this.ApiUrl + "movie/" + N + "?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES")
  }
}
