/*jshint esversion: 6 */

import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
// nmp install jquery-smooth-scroll
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    // js for page-section / it highlights stickyHeader when scrolled.
    this.pageSections = $(".page-section");
    this.headerLinks  = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.load(function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    // this keyword will point to the stickyHeader
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      // we want stickyHeader to turn fade back when scrolled back up direction.
      // We can do that by passing a parameter called direction.
      handler: function(direction) {
        // if scrolling down
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  // remember to call this method into our constructor function
  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
    // What do we want to happen when the page is scrolled to: we use jquery for our data-matching-link
    // then we want to turn our header orange when scrolling dpwm
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
    // remember of this keyword... this keyword will not work / we use var that = this to point to our function
            that.headerLinks.removeClass("is-current-link");
            // we use the var for jquery    we use "is-current-link" in our CSS
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
  //offset deafualt is 0(top of viewport), we want to trigger our highlight function early.
        offset: "20%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-45%"
      });
    });
  }
}

export default StickyHeader;
