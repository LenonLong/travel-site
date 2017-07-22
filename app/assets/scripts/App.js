/*jshint esversion: 6 */
// import  __name whatever you want___ from  ' type path '

import Mobilemenu     from  './modules/Mobilemenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

// save new object to variable
var mobileMenu     = new Mobilemenu();
new RevealOnScroll($('.feature-item'), '75%');
new RevealOnScroll($('.testimonial'), '60%');
