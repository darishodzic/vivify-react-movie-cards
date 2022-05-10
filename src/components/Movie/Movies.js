import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import Form from '../Form';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const handleDeleteMovie = (movieToDelete) => { 
    setMovies(movies.filter(movie => movie.id!==movieToDelete.id));
  }

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} handleDeleteMovie={handleDeleteMovie} />
        </div>
      </div>
        <Form addNewMovie={(movie) => { setMovies((oldMovies) => [...oldMovies,movie])}} />
    </div>
  );
}

export default Movies;
