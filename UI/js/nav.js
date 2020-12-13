let burger = document.querySelector(".burger");
let links = document.getElementsByClassName(".nav-list-item");
console.log(links);

const navs = () => {
   const nav = document.querySelector(".nav-list");

   burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      burger.classList.toggle("toggle");
   });
};
navs();
