import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from '../shared/movie';

@Injectable()
export class MoviesService {


  private api = 'assets/movies.json';
  constructor(private http: Http) {
  }

  /**
   * Load movies from the static movies.json data, usually an API URL.
   *
   * @return {Observable<Movie[]>} A list of movies.
   */
  getMovies(): Observable<Movie[]> {
    return this.http.get(this.api)
      .map(res => res.json());
  }
}
