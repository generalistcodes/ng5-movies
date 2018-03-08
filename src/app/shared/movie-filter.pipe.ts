import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './movie';

@Pipe({
    name: 'moviefilter',
    pure: false
})
export class MovieFilterPipe implements PipeTransform {
  transform(items: Movie[], filter: Movie): Movie[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Movie) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Movie} Movie The Movie to compare to the filter.
   * @param {Movie} filter The filter to apply.
   * @return {boolean} True if Movie satisfies filters, false if not.
   */
  applyFilter(movie: Movie, filter: Movie): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (movie[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (movie[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
