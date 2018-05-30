"use strict";

const parent = {
  template:`
  <search-criteria search-movie="searchMovie"></search-criteria>
  <movie-list></movie-list>
  `,
  controller: ["MovieService", function(MovieService){
    const vm = this;
    vm.movie = {};
    vm.searchMovie = (title) =>{
      vm.title = vm.movie.title;
      console.log(vm.title);
      MovieService.getInfo(title);

      // console.log(vm.movie);
    }
  }]
}

angular
  .module("app")
  .component("parent", parent)
