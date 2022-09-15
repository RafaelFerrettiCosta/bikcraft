// Activate header links
const links = document.querySelectorAll(".header-menu a");

function activateLink(el) {
  const url = location.href;
  const href = el.href;

  if (url.includes(href)) {
    el.classList.add("active");
  }
}

links.forEach(activateLink);

//activate estimate choices
const param = new URLSearchParams(location.search);

function activateProduct(p) {
  const element = document.getElementById(p);
  if (element) {
    element.checked = true;
  }
}

param.forEach(activateProduct);

//questions
const questions = document.querySelectorAll(".questions button");

function showAnswer(event) {
  const question = event.currentTarget;
  const control = question.getAttribute("aria-controls");
  const answer = document.getElementById(control);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function questionEvents(el) {
  el.addEventListener("click", showAnswer);
}

questions.forEach(questionEvents);

//bike gallery
const gallery = document.querySelectorAll(".bike-images img");
const galleryContainer = document.querySelector(".bike-images");

function changeImage(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("@media (min-width:1000px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}

function galleryEvents(el) {
  el.addEventListener("click", changeImage);
}

gallery.forEach(galleryEvents);

//plugin animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
