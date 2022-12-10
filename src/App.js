import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import MovieInfo from './MovieInfo';

function App() {
  const [movieData, setMovieData] = useState('');
  const [movieTitle, setMovieTitle] = useState('')

  const handleSubmit = title => {
    console.log('App - makeApiCall - title', title);
    setMovieTitle(title)
  };

useEffect(() => {
  let movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`

  const makeApiCall = () => {
    fetch(movieUrl)
    .then(res => res.json())
    .then(data => {
      console.log('movieData', data)
      setMovieData(data)
    })
  }
  makeApiCall()
}, [movieTitle])

  return (
    <div className="App">
      <div>Best Movie App Ever</div>
      <Form handleSubmit={handleSubmit} />
      {movieData.Title ? <MovieInfo movie={movieData} /> : null}
    </div>
  );
}

export default App;