import { Component, Injectable, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../shared/movie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';


@Component({
  selector: 'app-home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
@Injectable()
export class HomeComponent implements OnInit {
  /**
   * @type {string} name The page title.
   */
  name = 'Angular v4 - Applying filters to *ngFor using pipes';

  /**
   * @type {number} minYear The year of the oldest book in the json.
   */
  minYear: number = 1996;

  /**
   * @type {number} maxYear The year of the newest book in the json.
   */
  maxYear: number = 2017;

  /**
   * @type {number} numberOfMovies The number of movies in the JSON file, used for max attribute for limit and page.
   */
  numberOfMovies: number;

  /**
   * @type {number} limit The number of movies per page.
   */
  limit: number;

  /**
   * @type {number} page The current page.
   */
  page: number = 1;

  /**
   * @type {Book[]} movies A list of movies to output in a table.
   */
  movies: Movie[];

  /**
   * @type {Book} filter The object containing the filter values to apply to bookfilter.
   * Could have created another entity called BookFilter, but it would basically have the same fields.
   */
  filter: Movie = new Movie();

  constructor(private moviesService: MoviesService) {
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
}
