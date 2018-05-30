"use strict";

function MovieService($http) {
  let movieData = {};
  const getInfo = () => {
    console.log("Test?");
    return $http ({
      url: "https://api.themoviedb.org/3/movie/550?api_key=32535e85345be91dd928261c4d1d2a0e",
      method: "GET"
    }).then((response) =>{
      movieData = response;
      return response
    })

  }

  return {
    getInfo
  }

}



angular
  .module("app")
  .factory("MovieService", MovieService)
