import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies,handleDeleteMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} handleDeleteMovie={handleDeleteMovie} />
    ))}
  </div>
);

const MovieList = ({ movies,handleDeleteMovie }) => <div>{getMovies(movies,handleDeleteMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
  handleDeleteMovie: PropTypes.func,
};

MovieList.propTypes = {
  movies: PropTypes.array,
  handleDeleteMovie: PropTypes.func,

};

export default MovieList;
