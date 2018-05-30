"use strict";
const watchlistPage = {
  template: `
  <a href="#!/search">Search</a>
  <p>This is the Watchlist page!</p>
  `
}
angular
  .module("app")
  .component("watchlistPage", watchlistPage)
