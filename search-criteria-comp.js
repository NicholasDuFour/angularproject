"use strict";

const searchCriteria = {
  template: `
  <div class="main-bar">
    <form>
      <input type="text" ng-model="$ctrl.movie.title" placeholder="Find some flicks...">
      <button ng-click="$ctrl.searchMovie($ctrl.movie.title);" ng-click="showimg = false" >Search</button>
    </form>
    <a href="#!/watchlist"> Watchlist <img id="eye" src="view.png"></a>
  </div>

    <movie-list movie-details="$ctrl.movieDetails" detail-info="$ctrl.detailInfo" teststuff="$ctrl.teststuff" thing="$ctrl.thing" details="$ctrl.details(id)"></movie-list>
    <div ng-hide="showimg" class="mainimg">
      <img src="iawl.jpg">
      <img src="maxandfuriosa.png">
      <img src="pantherandfam.jpg">
    </div>
  `,
  controller: ["MovieService", function(MovieService){
    const vm = this;
        vm.movie = {
          // title: "cat"
        };
        vm.detail = {

        };


        vm.searchMovie = (title) => {



          vm.title = vm.movie.title;
          MovieService.getInfo(title).then((response) => {
            vm.thing = response.data.results;
            vm.thing.forEach((value,index)=>{
             MovieService.getDetails(value.id).then((response) => {
              vm.detailInfo = response.data;
              vm.thing[index].details = vm.detailInfo;

            }) // end MovieService.getDetails

            }) // end forEach


            vm.movie = {};
          }); // end of MovieService.getInfo

        } // end of vm.searchMovie()

        vm.details = (id) => {
          MovieService.getDetails(id).then((response) => {

            vm.detail.detailInfo = response.data;
          }) // end MovieService.getDetails

        } // end vm.details


// this is from the movie list component
          MovieService.getInfo(vm.title).then((response) => {
          response.data.results.forEach((x) => {
            vm.newData.push({
              title: x.title,
              overview: x.overview
            })
          })//end of foreach

        }) //end of MovieService.getInfo()

  }] // end controller
} // end component "searchCriteria"

angular
  .module("app")
  .component("searchCriteria", searchCriteria)
