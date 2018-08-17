var link = document.querySelector(".popup");
var overlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".close");
var login = modal.querySelector(".input-text");
var email = modal.querySelector(".input-email");
var text = modal.querySelector(".textarea");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("visible");
  modal.classList.add("visible");
  modal.classList.add("dropping");
  login.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("visible");
  modal.classList.remove("visible");
  modal.classList.remove("modal-error");
});
modal.addEventListener("submit", function (evt) {
  if(!login.value || !email.value || !text.value) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
  modal.offsetWidth = modal.offsetWidth;
  modal.classList.add("modal-error");
  }
});
