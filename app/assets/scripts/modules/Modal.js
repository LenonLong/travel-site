/*jshint esversion: 6 */

import $ from 'jquery';



class Modal {
  constructor() {
    this.openModalButton = (".open-modal");
    this.modal = $('.modal');
    this.closeModalButton = $(".modal__close");
    this.events();
  }

// remember to call events();
events() {
  // clicking the open modal button  //.bind(this)keyword will point to our property
  this.openModalButton.click(this.openModal.bind(this));

  // clicking the x closed button
  this.closeModalButton.click(this.closeModal.bind(this));

  // pushes any key / we create a method called keyPressHandler
  $(document).keyup(this.keyPressHandler.bind(this));
}

keyPressHandler(e) {
  if (e.keyCode == 27) {
    this.modal.removeClass("modal--is-visible");
  }
}
// Methods
openModal() {
  this.modal.addClass("modal--is-visible");
  // return false prevents the clicking of "Get-in-touch" button from scrolling to the top
  return false;
}

closeModal() {
  this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
