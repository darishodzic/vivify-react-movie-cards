import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, handleDeleteMovie, handleMovieUpdate }) => {
  const [showVoters, setShowVoters] = useState(false);
  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          {showVoters && <div>{movie.rating ? movie.voters || 1 : 0}</div>}
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating
                rating={movie.rating}
                handleMovieRating={rating => {
                  movie.rating = rating;
                  if (movie.voters) {
                    movie.voters = movie.voters + 1;
                  } else {
                    movie.voters = 1;
                  }
                  handleMovieUpdate(movie);
                }}
              />
            </div>
            <div
              className="card-footer-badge float-right badge badge-primary badge-pill"
              onMouseOver={() => {
                setShowVoters(true);
              }}
              onMouseOut={() => {
                setShowVoters(false);
              }}
            >
              {movie.rating}
            </div>
          </div>
        </div>
        {movie.formCreated && (
          <div
            onClick={() => {
              handleDeleteMovie(movie);
            }}
          >
            Delete
          </div>
        )}
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
