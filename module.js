"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
    .when("/search", {
      template: `<search-criteria></search-criteria>`
    })
    .when("/watchlist", {
      template: `<watchlist-page></watchlist-page>`
    })
    .otherwise ({
      redirectTo: "/search"
    })
  })