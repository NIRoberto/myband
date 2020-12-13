firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      if (user.email !== "robertwilly668@gmail.com") {
         alert("Your are not the admin");
         window.location.href = "/UI/html/blog.html";
      } else {
         return true;
      }
   } else {
      alert("Unauthorized");
      window.location.href = "/UI/html/loginpage.html";
   }
});
