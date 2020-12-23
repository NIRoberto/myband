
let single_blog = document.getElementById("single_blog");
const id = window.location.hash.replace("#", "");
let f_name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("textarea");
let name_m = document.getElementById("name_message");
let mail_m = document.getElementById("email_message");
let message_e = document.getElementById("message");
let all_comments = document.getElementById("comments");
let comment_number = document.getElementById("comment_number");

let form = document.querySelector("#form");
let name_regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
let message_regex = /[0-9A-Za-z]/;
var red = "red";
var green = "green";
var border_green = "1px solid green";
var border_red = "1px solid red";

if (form) {
   form.addEventListener("submit", (e) => {
   e.preventDefault();
      if (full_name() && valid_email() && valid_message()) {
    firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      db.collection("comments")
         .add({
            fullname: f_name.value,
            email: email.value,
            comment: message.value,
         })
         .then(() => {
         setTimeout(() => {
            location.reload();
         }, 1000);
         });
   } else {
      alert(" please you need to login in order to post  a comment");
            location.reload();

   }
});
  

      return true;
   }
});

full_name = () => {
   if (!f_name.value.match(name_regex)) {
      name_m.innerHTML = "Please enter valid name";
      f_name.style.border = border_red;
      name_m.style.color = red;
   } else {
      name_m.innerHTML = "Name is valid";
      f_name.style.border = border_green;
      name_m.style.color = green;
      return true;
   }
};

valid_email = () => {
   if (!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      mail_m.innerHTML = "Please enter valid email";
      email.style.border = border_red;
      mail_m.style.color = red;
   } else {
      mail_m.innerHTML = "Email is valid";
      email.style.border = border_green;
      mail_m.style.color = green;
      return true;
   }
};
valid_message = () => {
   if (!message.value.match(message_regex)) {
      message_e.innerHTML = "Please type your Comment here";
      message.style.border = border_red;
      message_e.style.color = red;
   } else {
      message_e.innerHTML = "Message is valid";
      message.style.border = border_green;
      message_e.style.color = green;
      return true;
   }
};



}
else {
   console.log("please form not found");
}
db.collection("Blog")
   .doc(id)
   .get()
   .then((doc) => {
      single_blog.innerHTML = `
     <div class="blog-card">
<div class="image">
  <img src="/UI/img/my journey.png" alt="My coding journey image">
</div>

<div class="date">
  <span><i class="fal fa-calendar-day"></i> ${date.toDateString()}</span>
</div>
<div class="blog-title">
  <h1 class="title">
${doc.data().title} </h1>
</div>
<div class="text">
<p>${doc.data().body}</p>
</div>
<div class="comment">
  <a href="#">
  <span>
    <i class="far fa-comments"> 03</i>
    Comment
  </span>
  <span>
<i class="fal fa-thumbs-up"> 2</i>

Like

  </span>
  </a>
</div>
    </div>
    `;
   });

db.collection("comments")
   .get()
   .then((comment) => {
comment_number.innerHTML=comment.size;
      comment.forEach(doc => {
   

     all_comments.innerHTML += `
       <div class="single-comment">
        <div class="image">
        <img src="/UI/img/robz.jpg" alt="Comment image" />
                           </div>
    <div class="text">
       <p>
           ${doc.data().comment}                  
          </p>
         <div class="name-date">
          <p>
            <a href="#"> ${doc.data().fullname}</a>
          </p>
          <p>
          <i class="fal fa-calendar-day"></i>
          ${date.toDateString()}
          </p>
            </div>
            </div>
            </div>
    `;
      });
   });