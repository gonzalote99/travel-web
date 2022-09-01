'use stricts';

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function() {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

const goToBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function() {
  window.scrollY >= 500 ? goToBtn.classList.add("active") : goToBtn.classList.remove("active");
})