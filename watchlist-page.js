"use strict";
const watchlistPage = {
  template: `
    <div class="main-bar">
      <a href="#!/search">Search Movies</a>
      <p>This is the Watchlist page!</p>
    </div>
  <div class="listItem" ng-repeat="movie in $ctrl.watchdata">
    <h3>{{ movie.title }}</h3>
    <img src="http://image.tmdb.org/t/p/w154{{ movie.poster_path }}">
    <p> {{ movie.tagline || "No description available." }}</p>
    <button type="button" ng-click="$ctrl.removeTitle(movie.id, $index);">Remove from Watchlist</button>
  </div>

  `,
  controller: ["MovieService", function(MovieService){
    const vm = this;
    vm.watchdata = [];
    vm.watchList = MovieService.getWatchList();
    vm.watchList.forEach((x)=>{
      MovieService.getDetails(x).then((response)=>{
        vm.watchdata.push(response.data);
        console.log(vm.watchdata);
      });
    })

    //Declares watchlist, function to add title
    // vm.watchList = [];
    // vm.addTitle = () =>{
    //   vm.watchList.push(vm.newTitle);
    //   vm.newTitle = {};
    // }
    //

    // //Remove title from watchlist
    vm.removeTitle = (id, index)=> {
    console.log(id);
    vm.watchdata.splice(index, 1);
    MovieService.removeTitle(id);
    }

  }] //end of controller

}
angular
  .module("app")
  .component("watchlistPage", watchlistPage)
