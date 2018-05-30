"use strict";

const searchCriteria = {
  template: `
  <form>
    <input type="text" placeholder="Search...">
  </form>
  `,
  controller: ["MovieService", function(MovieService){
    const vm = this;


  }]
}

angular
  .module("app")
  .component("searchCriteria", searchCriteria)
