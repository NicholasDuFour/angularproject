"use strict";

const watchlistPage = {

  template: `
   <div class="main-bar">
    <a href="#!/search">Search Movies</a>
    <h3 id="userid"> User's Watchlist</h3>
   </div> <!-- end div "main-bar -->
  <div class="watchListItems">
    <div class = "listItem" ng-repeat="movie in $ctrl.watchdata">
      <h3>{{ movie.title }}</h3>
      <div class="poster">
      <img src="http://image.tmdb.org/t/p/w154{{ movie.poster_path }}">
      </div>
      <p> {{ movie.tagline || "No description available." }}</p>
      <button type="button" ng-click="$ctrl.removeTitle(movie.id, $index);">Remove from Watchlist</button>

      <button type="button" ng-click="showme=true"  ng-hide = "showme" >Show Details</button>
      <button ng-show="showme" ng-click="showme=false">Hide Details</button>


    <!-- POPUP ELEMENTS BELOW -->
    <div ng-show="showme" class="popup">
      <div class="popup-content">
        <h3 ng-show="showme">Movie Details</h3>
        <h5>Overview: </h5><p ng-show="showme" > {{movie.overview}} </p>
        <h5>Runtime:</h5> <p ng-show="showme" >  {{movie.runtime}} minutes</p>
       <!--  <h5>Rating:</h5>
        <ul>
          <li ng-repeat="rating in movie.releases.countries"> {{ rating.iso_3166_1}}: {{ rating.certification}}  </li>
        </ul> -->

        <h5>Rating:</h5><p ng-show="showme" > {{movie.releases.countries[0].certification || "No rating available."}}</p>
        <h5>Review:</h5><p ng-show="showme" >  {{movie.vote_average}} </p>
        <ul>
        <h5 ng-show="showme">Genre:</h5>
          <li ng-repeat = "genre in movie.genres">{{genre.name}}</li>
        </ul>
        <button type="button" ng-click="showme=false">Hide Details</button
      </div> <!-- end div "popup-content" -->

    </div> <!-- end div "popup" -->

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
