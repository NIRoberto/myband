let login = document.querySelector(".login");
let logout = document.querySelector("#logout");
let user_info = document.querySelector(".drop");

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      login.style.display = "none";
      user_info.style.display = "block";
   } else {
      login.style.display = "block";
      user_info.style.display = "none";
   }
});
let all_blog = document.getElementById("all_blog");
let date = new Date();

db.collection("Blog")
   .get()
   .then((post) => {
      post.forEach((doc) => {
         all_blog.innerHTML += `
        <div class="blog-card" >
<div class="image">
  <img src="/UI/img/my journey.png" alt="My coding journey image">
</div>

<div class="date">
  <span><i class="far fa-calendar-week"></i> ${date.toDateString()}</span>
</div>
<div class="blog-title">
  <h1 class="title"><a href="javascript:single_blog('${doc.id}')">
  ${doc.data().title.substr(0, 30)}
  </a></h1>
</div>
<div class="text">
  <p>${doc.data().body.substr(0, 150)}...</p>
</div>
<div class="comment">
  <a href="#">
  <span>
    <i class="far fa-comments"> 03</i>
    Comment

  </span>
  </a>
</div>
    </div><br />
    
    `;
      });
   });

single_blog = (id) => {
   window.location.href = "/UI/html/singleblog.html#" + id;
};

logout.addEventListener("click", () => {
   firebase
      .auth()
      .signOut()
      .then(function () {
         alert("user logged out successfully");
         window.location.href = "/UI/html/loginpage.html";
      })
      .catch(function (error) {
         alert(error.message);
      });
});

//  single blog logic
