const navs = () => {
    let burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      burger.classList.toggle('toggle');
     

    });
  };
  navs();
console.log('hello');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let logginstatus = document.querySelectorAll('.login');
    
    console.log(logginstatus);
    logginstatus.forEach((res) => {
    res.style.display = 'none';
  })
  }
  else {
    let loguserout = document.getElementById('log');

    loguserout.style.display = 'none';
      console.log(logginstatus);
      logginstatus.forEach((res) => {
      res.style.display = 'block';
    });
  }
});
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

 