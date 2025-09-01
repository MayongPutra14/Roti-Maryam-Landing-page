const listBar = document.querySelector(".list-bar");
const navSlide = document.querySelector("nav ul");

listBar.addEventListener("click", () => {
  navSlide.classList.toggle("slide");
});
