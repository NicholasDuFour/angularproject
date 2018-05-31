"use strict";

function MovieService($http) {
  let movieData = {};
  let movieDetailData = {};
  const getInfo = (title) => {
    // console.log(title);
    let movieTitle = title;
    return $http ({
      url: "https://api.themoviedb.org/3/search/movie?api_key=&query=" + title,
      method: "GET"
    }).then((response) =>{
      movieData = response;
      console.log(movieData);
      return movieData;
    })
  } //end of getInfo

  const getDetails = (movieid) =>{
    // console.log(movie.title);
    console.log(movieid);

    // let id = movieid;
    return $http ({
      url: "https://api.themoviedb.org/3/movie/"+movieid+"?api_key=",
      method: "GET"
    }).then((response) =>{
      movieDetailData = response;
      return movieDetailData;
    })
  }

  return {
    getInfo,
    getDetails
  }

}


angular
  .module("app")
  .factory("MovieService", MovieService)
