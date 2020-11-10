const navs = () => {
    let burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      burger.classList.toggle('toggle');
     

    });
  };
  navs();

//  logout 
let logout = document.getElementById('log');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then((e) => {
    alert("had succefull signed out");
      window.location.href = '/UI/html/blog.html';


  }).catch((error) => {
    alert(error.message);

  });
}); 

 