"use strict";
const watchlistPage = {
  template: `
  <a href="#!/search">Search Movies</a>
  <p>This is the Watchlist page!</p>
  <p> {{ $ctrl.watchlist.title }} </p>
  `,
  controller: ["MovieService", function(MovieService){
    const vm = this;
    vm.watchList = MovieService.getWatchList();

    //Declares watchlist, function to add title
    // vm.watchList = [];
    // vm.addTitle = () =>{
    //   vm.watchList.push(vm.newTitle);
    //   vm.newTitle = {};
    // }
    //
    // //Remove title from watchlist
    // vm.removeTitle = (index)=> {
    // vm.watchList.splice(index, 1);
    // }

  }] //end of controller

}
angular
  .module("app")
  .component("watchlistPage", watchlistPage)
