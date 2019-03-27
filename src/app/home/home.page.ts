import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movie_date = '';
  movies = this.movieService.getMovies();
constructor(private router:Router, private movieService:MovieService) {}

  myMovieDetails(movie) {
    this.router.navigate(['/moviedetails/'+ movie.id]);
  }



  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }



}
