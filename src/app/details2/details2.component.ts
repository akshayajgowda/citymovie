import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.scss'],
})
export class Details2Component implements OnInit {

  movies = this.movieService.getMovies();
  constructor(private router:Router, private route: ActivatedRoute, private movieService:MovieService) {}
  id: number;
  private sub: any;
  movie:any;
  
  
  ngOnInit() {
    this.movie= {image_url:'', production_house:'', name:''};
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.movieService.getRemoteMovieById(this.id).subscribe((movie)=>{this.movie = movie;});
   });
  }
  
  makePayment() {
    this.router.navigate(['/payment']);
  }
}
