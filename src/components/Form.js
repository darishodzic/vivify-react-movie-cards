import React, { useState } from 'react';

const Form = props => {
  const { addNewMovie } = props;

  const [movie, setMovie] = useState({
    id: null,
    title: '',
    subtitle: '',
    imageUrl: '',
    description: '',
    rating: 0,
  });

  const[movieValidation,setMovieValidation] = useState(false)

  const titleHandler = e => {
    e.persist();
    setMovie(oldValue => {
      return { ...oldValue, title: e.target.value };
    });
  };

  const subtitleHandler = e => {
    e.persist();
    setMovie(oldValue => {
      return { ...oldValue, subtitle: e.target.value };
    });
  };

  const imageUrlHandler = e => {
    e.persist();
    setMovie(oldValue => {
      return { ...oldValue, imageUrl: e.target.value };
    });
  };

  const descriptionHandler = e => {
    e.persist();
    setMovie(oldValue => {
      return { ...oldValue, description: e.target.value };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    if(chechkIsMovieValid(movie)) {
      setMovieValidation(true)
      movie.id = Math.random()*10000
      addNewMovie(movie);
    }else{
      setMovieValidation(false)
    }
  };

  const chechkIsMovieValid = movie => {
    if (movie.title && movie.subtitle && movie.imageUrl && movie.description) {
      return true;
    }
    return false;
  };

  

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Title:</label>
        <input type="text"  onChange={titleHandler} />
        <label>Subtitle:</label>
        <input type="text"  onChange={subtitleHandler} />
        <label>Description:</label>
        <input type="text"  onChange={descriptionHandler} />
        <label>Image url:</label>
        <input type="url"  onChange={imageUrlHandler} />
        <button type="submit">Submit</button>
        {
          !movieValidation&&<p>Please fill all the fields</p>
        }
      </form>
    </div>
  );
};

export default Form;
