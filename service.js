"use strict";

function MovieService($http) {
  let key = "";
  let movieData = {};
  let movieDetailData = {};
  const getInfo = (title) => {
    // console.log(title);
    let movieTitle = title;
    return $http ({
      url: "https://api.themoviedb.org/3/search/movie?api_key=" + key +"&query=" + title,
      method: "GET"
    }).then((response) =>{
      movieData = response;
      return movieData;
    })
  } //end of getInfo

  const getDetails = (movieid) =>{


    return $http ({
      url: "https://api.themoviedb.org/3/movie/"+movieid+"?api_key=" + key +"&append_to_response=releases",
      method: "GET"
    }).then((response) =>{
      movieDetailData = response;
      return movieDetailData;
    })
  }

  //Declares watchlist, function to add title
    let watchList = [];
    const addTitle = (id, overview, runtime, certification, vote_average, genres) =>{

      let newTitle = {};
      watchList.push(id, overview, runtime, certification, vote_average, genres);

      return watchList;
    }

    //Remove title from watchlist
    const removeTitle = (id) => {
    // watchList.splice(index, 1);

    watchList.forEach((value, index)=>{
      if (value === id){
        watchList.splice(index, 1);
      }

    })
    }

    const getWatchList = () =>{
      return watchList;
    }

  return {
    getInfo,
    getDetails,
    addTitle,
    removeTitle,
    getWatchList
  }

}


angular
  .module("app")
  .factory("MovieService", MovieService)
