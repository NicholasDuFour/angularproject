"use strict";

const searchCriteria = {
  template: `
  <form>
    <input type="text" ng-model="$ctrl.movie.title" placeholder="Search...">
    <button ng-click="$ctrl.searchMovie($ctrl.movie.title);">Search</button>
  </form>
 <!-- <p> {{ $ctrl.movie.title}} </p> -->



  <movie-list thing="$ctrl.thing"></movie-list>


  `,
  // <div ng-repeat="movie in $ctrl.newData">
  //   <h3> {{ movie.title }} </h3>
  //   <p> {{ movie.overview }}</p>
  // </div>
  controller: ["MovieService", function(MovieService){
    const vm = this;
        vm.newData = [];
        vm.movie = {
          // title: "cat"
        };
        vm.searchMovie = (title) => {
          vm.title = vm.movie.title;
          // console.log(vm.title);
          MovieService.getInfo(title).then((response) => {
            vm.thing = response.data.results;
            console.log(vm.thing);
            vm.movie = {};
          });
        }


// this is from the movie list component
          MovieService.getInfo(vm.title).then((response) => {
        // console.log(response.data.results);

        // vm.title = response.data.results[0].title;
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
