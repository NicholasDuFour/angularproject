"use strict";

function MovieService($http) {
  let movieData = {};
  const getInfo = (title) => {
    console.log(title);
    let movieTitle = title;
    return $http ({
      url: "https://api.themoviedb.org/3/search/movie?api_key=32535e85345be91dd928261c4d1d2a0e&query=" + title,
      method: "GET"
    }).then((response) =>{
      movieData = response;
      console.log(movieData);
      return movieData;
    })
  } //end of getInfo

  const newSearch = (movie) =>{
    // console.log(movie.title);
    let title = movie.title;
    return $http ({
      url: "https://api.themoviedb.org/3/search/movie?api_key=32535e85345be91dd928261c4d1d2a0e&query=" + title,
      method: "GET"
    }).then((response) =>{
      movieData = response;
      return movieData;
    })
  }

  return {
    getInfo,
    newSearch
  }

}


angular
  .module("app")
  .factory("MovieService", MovieService)
