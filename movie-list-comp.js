"use strict";
const movieList = {
  template: `
  <div class="listItem" ng-repeat="movie in $ctrl.thing">
    <h3> {{ movie.title }} </h3>
    <img src="http://image.tmdb.org/t/p/w154{{ movie.poster_path }}"
    <p> {{ $ctrl.detailInfo.tagline || "No description available." }}</p>
   
    <button type="button" ng-click="showme=true" ng-click="$ctrl.details({id: movie.id})">Show Details</button>
    <button ng-show="showme" ng-click="showme=false">Hide Details</button>

    <h2 ng-show="showme">Movie Details</h2>
    <p ng-show="showme" >{{$ctrl.detailInfo.genres}}</p>
    <p ng-show="showme" >{{$ctrl.detailInfo.runtime}} minutes</p>
    <p ng-show="showme" >{{$ctrl.detailInfo.releases.countries[0].certification || "No ratiing available."}}</p>
  <!--  <p ng-show="showme" >{{$ctrl.detailInfo}}</p> -->
<p ng-show="showme">{{movie}}</p>
<details-btn ng-show="showme" ng-click="$ctrl.details({id: movie.id})"></details-btn>
    <button type="button">Add to Watchlist</button>

    <!-- {{$ctrl.thing}} -->
  </div>
  `,
  bindings: {
    thing: "<",
    detailInfo: "<",
    details: "&"
  },

  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.newData = [];


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
