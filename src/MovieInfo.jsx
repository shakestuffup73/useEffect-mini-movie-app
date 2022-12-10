import React from 'react'

function MovieInfo({ movie }){
  console.log('props from MovieInfo', movie)

  return (
    <>
    <h1>Title:{movie.Title} </h1>
    <h2>Year:{movie.Year}</h2>
    <img src={movie.Poster} alt='movie' />
    <h3>Genre:{movie.Genre} </h3>
    <h4>Plot:{movie.Plot} </h4>
    </>

  )
}

export default MovieInfo