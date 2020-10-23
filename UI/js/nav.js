const navs = () => {
    let burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      burger.classList.toggle('toggle');
     

    });
  };
  navs();
  