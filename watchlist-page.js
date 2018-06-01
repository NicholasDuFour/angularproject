"use strict";

const watchlistPage = {

  template: `
   <div class="main-bar">
    <a href="#!/search">Search Movies</a>
    <p>This is the Watchlist page!</p>
   </div>
  <div class = "listItem" ng-repeat="movie in $ctrl.watchdata">
    <h3>{{ movie.title }}</h3>
    <img src="http://image.tmdb.org/t/p/w154{{ movie.poster_path }}">
    <p> {{ movie.tagline || "No description available." }}</p>
    <button type="button" ng-click="$ctrl.removeTitle(movie.id, $index);">Remove from Watchlist</button>
  
    <button type="button" ng-click="showme=true"  ng-hide = "showme" >Show Details</button>
    <button ng-show="showme" ng-click="showme=false">Hide Details</button>
  
  <div ng-show="showme" class="popup">
  <div class="popup-content">
  <h2 ng-show="showme">Movie Details</h2>
  <p ng-show="showme" > Overview: {{movie.overview}} </p> 
  <p ng-show="showme" > Runtime: {{movie.runtime}} minutes</p>
  <p ng-show="showme" >Rating: {{movie.releases.countries[0].certification || "No rating available."}}</p>
  <p ng-show="showme" > Review: {{movie.vote_average}} </p>
  <p ng-show="showme">Genre:</p>
  <div ng-repeat = "genre in movie.genres">
  <p ng-show="showme" > {{genre.name}}</p>
  </div>
  <button type="button" ng-click="showme=false">Hide Details</button
  </div>
  </div>
</div>
</div>
  `,




  controller: ["MovieService", function(MovieService){
    const vm = this;
    vm.watchdata = [];
    console.log(vm.watchdata); 
    console.log("hello"); 
    vm.watchList = MovieService.getWatchList();
    console.log(vm.watchList);
    vm.watchList.forEach((x)=>{
      MovieService.getDetails(x).then((response)=>{
        vm.watchdata.push(response.data);
        console.log(vm.watchList);
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
