"use strict";

const detailsBtn = {
  template: `
  <div class="check-element funky-show-hide" ng-show="checked">
  <button type="button class="detail-btn">Close Details </button>
  </div>

  `,
  controller: function() {
    const vm = this;
  }

}


angular
  .module("app")
  .component("detailsBtn", detailsBtn)