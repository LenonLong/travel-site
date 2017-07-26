// import jquery
import $ from 'jquery';

// create class
class Mobilemenu {
  constructor() {

    // select and manipulate and store it
    this.siteHeader   = $('.site-header');
    this.menuIcon     = $('.site-header__menu-icon');
    this.menuContent  = $('.site-header__menu-content');
    // create new method
    this.events();
  }
    // list that method  ** events() is not a javascript method so we call it above first **
  events() {
    // select the events we want to watch for and tell what to do
    // inside the event handler () we want to run the toggleTheMenu method
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

    toggleTheMenu() {
      console.log('Click');
      this.menuContent.toggleClass('site-header__menu-content--is-visible');
      this.siteHeader.toggleClass('site-header--is-expanded');
      this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }

}

// export the class
export default Mobilemenu;
