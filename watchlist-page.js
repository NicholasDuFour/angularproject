"use strict";
const watchList = {
  template: `
  <a href="#!/search">Search</a>
  <p>This is the Watchlist page!</p>
  `
}
angular
  .module("app")
  .component("watchList", watchList)
