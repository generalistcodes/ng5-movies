/**
 * Movie entity, used for filtering as well.
 */
export class Movie {
  /**
   * @type {number} id Unique numeric identifier.
   */
  id: number;

  /**
   * @type {string} title The title of the movie.
   */
  title: String;

  /**
   * @type {string} author The author of the movie.
   */
  author: String;

  /**
   * @type {number} year The year the movie was published.
   */
  year: number;
}
