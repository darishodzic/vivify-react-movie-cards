import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies,handleDeleteMovie,handleMovieUpdate) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} handleDeleteMovie={handleDeleteMovie} handleMovieUpdate={handleMovieUpdate} />
    ))}
  </div>
);

const MovieList = ({ movies,handleDeleteMovie ,handleMovieUpdate}) => <div>{getMovies(movies,handleDeleteMovie,handleMovieUpdate)}</div>;

MovieList.defaultProps = {
  movies: [],
  handleDeleteMovie: PropTypes.func,
  handleMovieUpdate:PropTypes.func
};

MovieList.propTypes = {
  movies: PropTypes.array,
  handleDeleteMovie: PropTypes.func,
  handleMovieUpdate:PropTypes.func

};

export default MovieList;
