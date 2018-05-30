"use strict";
const movieList = {
  template: `
  <div>
    <p> {{ $ctrl.title }}</p>
  </div>
  `,

  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.newData = [];
    MovieService.getInfo().then((response)=>{
    console.log(response);
    vm.title = response.data.title;


    })
  }]
}

angular
  .module("app")
  .component("movieList", movieList)
