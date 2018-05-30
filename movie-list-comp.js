"use strict";
const movieList = {
  template: `
  <div ng-repeat="movie in $ctrl.newData">
    <h3> {{ movie.title }} </h3>
    <p> {{ movie.overview }}</p>
  </div>
  `,
  bindings: {
    thing: "<"
  },

  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.newData = [];
    vm.title = "dog";

    //   MovieService.getInfo(vm.title).then((response) => {
    // // console.log(response.data.results);
    //
    // // vm.title = response.data.results[0].title;
    //   response.data.results.forEach((x) => {
    //     vm.newData.push({
    //       title: x.title,
    //       overview: x.overview
    //     })
    //   })//end of foreach
    //
    // }) //end of MovieService.getInfo()
  // }

  }] //end of controller
} //end of movieList

angular
  .module("app")
  .component("movieList", movieList)
