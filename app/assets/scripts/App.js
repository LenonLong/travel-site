/*jshint esversion: 6 */

// import  __name whatever you want___ from  ' type path '

import Mobilemenu     from './modules/Mobilemenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $              from 'jquery';
import StickyHeader   from './modules/StickyHeader';
import Modal          from './modules/Modal';

// save new object to variable
var mobileMenu     = new Mobilemenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
var stickyHeader = new StickyHeader();
var modal = new Modal();
