"use strict";
const movieList = {
  template: `

  <div class="listItem" ng-repeat="movie in $ctrl.thing">
    <h3> {{ movie.title }} </h3>
    <div class="poster">
      <img src="http://image.tmdb.org/t/p/w342{{ movie.poster_path }}">
    </div> <!-- end div "poster" -->
    <p> {{ movie.details.tagline || "No description available." }}</p>

    <div class="buttonholder">
      <button type="button" ng-click="showme=true"  ng-hide = "showme" >Show Details</button>
      <button ng-show="showme" ng-click="showme=false">Hide Details</button>
      <button type="button" ng-click="$ctrl.addTitle(movie.id);">Add to Watchlist</button>
    </div> <!-- end div "buttonholder" -->

      <!-- POPUP ELEMENTS BELOW -->
    <div ng-show="showme" class="popup">
      <div class="popup-content">
        <h3 ng-show="showme">Movie Details</h3>
        <h5>Overview: </h5><p ng-show="showme" > {{movie.details.overview}} </p>
        <h5>Runtime:</h5> <p ng-show="showme" >  {{movie.details.runtime}} minutes</p>
        <h5>Rating:</h5><p ng-show="showme" > {{movie.details.releases.countries[0].certification || "No rating available."}}</p>
        <h5>Review:</h5><p ng-show="showme" >  {{movie.details.vote_average}} </p>
        <ul>
        <h5 ng-show="showme">Genre:</h5>
          <li ng-repeat = "genre in movie.details.genres">{{genre.name}}</li>
        </ul>
        <button type="button" ng-click="showme=false">Hide Details</button
      </div> <!-- end div "popup-content" -->

    </div> <!-- end div "popup" -->
  </div> <!-- end div "listItem" -->

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
    vm.newData = [];
    vm.addTitle = (id) =>{
      console.log(id);
      MovieService.addTitle(id);
    }
    // vm.getWatchList = () =>{
    //   console.log("get list test");
    //   MovieService.getWatchList();
    // }


      // MovieService.getInfo(vm.title).then((response) => {
    // console.log(response.data.results);

    // vm.title = response.data.results[0].title;
      // response.data.results.forEach((x) => {
      //   vm.newData.push({
      //     title: x.title,
      //     overview: x.overview,
      //     // id: x.id
      //   })
      // })//end of foreach

    // }) //end of MovieService.getInfo()


  }] //end of controller
} //end of movieList

angular
  .module("app")
  .component("movieList", movieList)
