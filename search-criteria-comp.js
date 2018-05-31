"use strict";

const searchCriteria = {
  template: `
  <div class="main-bar">
    <form>
      <input type="text" ng-model="$ctrl.movie.title" placeholder="Search...">
      <button ng-click="$ctrl.searchMovie($ctrl.movie.title);">Search</button>
    </form>
    <a href="#!/watchlist"> Watchlist </a><img id="eye" src="view.png">
  <!-- <p> {{ $ctrl.movie.title}} </p> -->
  </div>

    <movie-list movie-details="$ctrl.movieDetails" detail-info="$ctrl.detailInfo" teststuff="$ctrl.teststuff" thing="$ctrl.thing" details="$ctrl.details(id)"></movie-list>

  `,
  controller: ["MovieService", function(MovieService){
    const vm = this;
        vm.movie = {
          // title: "cat"
        };
        vm.detail = {

        };
        vm.teststuff = [];

        vm.searchMovie = (title) => {



          vm.title = vm.movie.title;
          MovieService.getInfo(title).then((response) => {
            vm.thing = response.data.results;

            // console.log(vm.thing);

            vm.thing.forEach((value,index)=>{

            //  console.log(vm.thing[index]);

             MovieService.getDetails(value.id).then((response) => {
              // console.log(response.data);
              vm.detailInfo = response.data;
              // console.log(vm.detailInfo);
              vm.teststuff.push(vm.detailInfo)
              vm.thing[index].details = vm.detailInfo;
              console.log(vm.thing);


              // vm.detail.detailInfo = response.data;

              // console.log(vm.movie.detailInfo);
            }) // end MovieService.getDetails

            }) // end forEach

            // console.log(vm.thing);
            vm.movie = {};

            console.log(vm.teststuff);
          }); // end of MovieService.getInfo

        } // end of vm.searchMovie()

        vm.details = (id) => {
          console.log(id);
          MovieService.getDetails(id).then((response) => {
            // console.log(response.data);
            vm.detail.detailInfo = response.data;
            // console.log(vm.detail);

          }) // end MovieService.getDetails

        } // end vm.details


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
