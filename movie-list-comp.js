"use strict";
const movieList = {
  template: `

  <div class="listItem" ng-repeat="movie in $ctrl.thing">
    <h3> {{ movie.title }} </h3>
    <img src="http://image.tmdb.org/t/p/w154{{ movie.poster_path }}">
    <p> {{ movie.details.tagline || "No description available." }}</p>

 
    <button type="button">Add to Watchlist</button>
    <button type="button" ng-click="$ctrl.details({id: movie.id})">Details</button>
    <details-btn ng-click="$ctrl.details({id: movie.id})"></details-btn>
  </div>

  `,
  bindings: {
    thing: "<",
    detailInfo: "<",
    teststuff: "<",
    movie: "<",
    details: "&"
  },

  controller: ["MovieService", function(MovieService) {
    const vm = this;


  }] //end of controller
} //end of movieList

angular
  .module("app")
  .component("movieList", movieList)
