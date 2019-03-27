import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://192.168.0.42:3001/api/movies';

  constructor(private http: HttpClient) { }

  movies= [];

  getRemoteMovies(): Observable<[]>{
    return this.http.get<[]>(this.movieUrl); 		
  }

  getMovies(){
    return this.movies;
  }

  getRemoteMovieById(id):Observable<any>{
    return this.http.get<[]>(this.movieUrl + "/"+id);
   }

  // addRemoteMovie(movie):Observable<any>{
  //   return this.http.post(this.movieUrl,movie);
  // }
  
  // deleteRemoteMovie(movie): Observable<[]>{
  //   return this.http.delete<[]>(this.movieUrl+'/'+movie.id);
  // }
 
  
  // updateRemoteMovie(movie):Observable<any>{
  //   return this.http.put(this.movieUrl + "/"+movie.id,movie);
  // }



}
