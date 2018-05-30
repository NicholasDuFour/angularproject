"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
    .when("/search", {
      template: `<search-criteria></search-criteria>`
    })
    .when("/watchlist", {
      template: `<watch-list></watch-list>`
    })
    .otherwise ({
      redirectTo: "/search"
    })
  })