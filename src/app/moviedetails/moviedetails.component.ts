import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {

  

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
