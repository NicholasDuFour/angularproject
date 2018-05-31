"use strict";
const watchlistPage = {
  template: `
  <a href="#!/search">Search Movies</a>
  <p>This is the Watchlist page!</p>
  <div ng-repeat="movie in $ctrl.watchdata">
    <h3>{{ movie.title }}</h3>
    <img src="http://image.tmdb.org/t/p/w154{{ movie.poster_path }}">
    <p> {{ movie.tagline || "No description available." }}</p>
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
    vm.removeTitle = (index)=> {
    vm.watchList.splice(index, 1);
    }

  }] //end of controller

}
angular
  .module("app")
  .component("watchlistPage", watchlistPage)
