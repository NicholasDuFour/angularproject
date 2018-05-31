"use strict";

const searchCriteria = {
  template: `
  <div class="main-bar">
    <form>
      <input type="text" ng-model="$ctrl.movie.title" placeholder="Search...">
      <button ng-click="$ctrl.searchMovie($ctrl.movie.title);">Search</button>
    </form>
    <a href="#!/watchlist"> Watchlist </a>
  <!-- <p> {{ $ctrl.movie.title}} </p> -->



    <movie-list detail-info="$ctrl.detailInfo" thing="$ctrl.thing" details="$ctrl.details(id)"></movie-list>

  <div>


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
          console.log("searchMovie");
          
          vm.title = vm.movie.title;
          console.log(vm.movie.title)

          // console.log(vm.title);
          MovieService.getInfo(title).then((response) => {
            vm.thing = response.data.results;
            response.data.results.forEach((x)=>{
             let id = x.id;
            //  console.log(id);
             
            })
            // console.log(vm.thing);
            vm.movie = {};
          }); // end of MovieService.getInfo


        } // end of vm.searchMovie()

        vm.details = (id) => {
          // console.log(id);
          MovieService.getDetails(id).then((response) => {
            // console.log(response.data);
            vm.detailInfo = response.data;
          })
          
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
