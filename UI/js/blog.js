
let login = document.querySelector(".login");
let logout = document.querySelector("#logout");
let user_info = document.querySelector(".drop");
let sub_form = document.getElementById("sub_form");
let subscript = document.getElementById("subscribe");
let sub_error = document.getElementById('subscribe_error');
sub_form.addEventListener("submit", (e) => {
   e.preventDefault();
   if (!subscript.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      sub_error.innerHTML = 'Please check your email';
      sub_error.style.color = "red";
      subscript.style.border = "1px solid red";
      sub_error.style.fontSize = "13px";
      sub_error.style.marginBottom = '10px';

   }
   else {
      sub_error.innerHTML = 'Email is valid ';
      sub_error.style.color = "green";
      sub_error.style.fontSize = "13px";

      subscript.style.border = "1px solid green";


      db.collection("subscribers").add({
       email:subscript.value
      }).then(() => {
         setTimeout(() => {
           location.reload();
          }, 2000);
         
      })
      

   }
});

let all_blog = document.getElementById("all_blog");
let all_blogs = document.querySelector(".all_blog");

console.log(all_blogs);
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
firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      login.style.display = "none";
      user_info.style.display = "block";
   } else {
      login.style.display = "block";
      user_info.style.display = "none";
   }
});