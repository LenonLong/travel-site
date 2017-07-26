/*jshint esversion: 6 */

import $ from 'jquery';
// with waypoints we have to manually point towards the directory
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  // we pass two anyname arg, els for element and offset
  constructor(els, offset) {
    // the four features/dom item is a collection of element that we store into itemsToReveal
    // remember the order / in order for createWaypoints to start, offsetPercentage has to go before it.
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  // new method we called createWaypoints().
  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function(){
      // this keyword poins to the dom element
      var currentItem = this;
      // we have access to the Waypoint b/c we imported the waypoint lib file
      new Waypoint({
        // dom element we want to watch for
        element: currentItem,
        handler: function(){
          $(currentItem).addClass('reveal-item--is-visible');
        },
        // offset refers to the viewport / 0% - top 100% - bottom of page
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
