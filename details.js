"use strict";

const detailsBtn = {
  template: `
  <button type="button class="detail-btn">Details</button>
  `,
  controller: function() {
    const vm = this;
  }

}


angular
  .module("app")
  .component("detailsBtn", detailsBtn)