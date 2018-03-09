import { Component, Injectable, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../shared/movie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
@Injectable()
export class HomeComponent implements OnInit {

  numberOfMovies: number;
  limit: number;
  page: number = 1;
  movies: Movie[];
  movieTitle: string;
  buttonStatus = false;

  /**
   * @type {Movie} filter The object containing the filter values to apply to moviefilter.
    */
  filter: Movie = new Movie();

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Load movies from the movies service on init
    this.moviesService.getMovies().subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
        this.numberOfMovies = this.movies.length;
        this.limit = 8; // Start off by showing all movies on a single page.
      });
  }

  focus(title: string){
    this.movieTitle = title;
  }

  mouseLeave(id){
    this.movieTitle = '';
  }

  next(){
    this.page = this.page + 1;
  }
  prev(){

    if(this.page === 1){
      this.buttonStatus = false;
    }else{
      this.page = this.page - 1;
    }

  }
}
