let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let lower = document.getElementById("password_letters");
let upper = document.getElementById("uppercase_letters");
let digit = document.getElementById("password_digit");
let user = document.getElementById("user");

let form = document.getElementById("form");
let popup = document.querySelector(".popup");
let ok = document.getElementById("btn");

let name_regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
let password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
var red = "red";
var green = "green";
var border_green = "1px solid green";
var border_red = "1px solid red";

form.addEventListener("submit", (e) => {
   e.preventDefault();
   if (full_name() && valid_email() && valid_password()) {
      popup.style.display = "flex";
      user.innerHTML = `Logged in as ${name.value}`;
      firebase
         .auth()
         .createUserWithEmailAndPassword(email.value, password.value)
         .then((cred) => {
            // window.location.href='/UI/admin post/post/all.html';
         })
         .catch((error) => {
            alert(error.message);
         });
      ok.addEventListener("click", () => {
         popup.style.display = "none";
         window.location.href = "/UI/html/blog.html";
      });
      return true;
   } else {
      popup.style.display = "none";
   }
});

full_name = () => {
   if (!name.value.match(name_regex)) {
      Name.innerHTML = "Please enter valid name";
      name.style.border = border_red;
      Name.style.color = red;
   } else {
      Name.innerHTML = "Name is valid";
      name.style.border = border_green;
      Name.style.color = green;
      return true;
   }
};

valid_email = () => {
   if (!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      Email.innerHTML = "Please enter valid email";
      email.style.border = border_red;
      Email.style.color = red;
   } else {
      Email.innerHTML = "Email is valid";
      email.style.border = border_green;
      Email.style.color = green;
      return true;
   }
};
valid_password = () => {
   if (!password.value.match(password_regex)) {
      Password.innerHTML =
         "Password at least 6 characters and no more than 15 ";
      lower.innerHTML = "Password must contain at least one lowercase";
      upper.innerHTML = "Password must contain at least one uppercase";
      digit.innerHTML = "Password must contain at least one digit";
      lower.style.color = red;
      upper.style.color = red;
      digit.style.color = red;

      password.style.border = border_red;
      Password.style.color = red;
   } else {
      Password.innerHTML = "Password is valid";
      lower.innerHTML = ``;
      upper.innerHTML = ``;
      digit.innerHTML = ``;
      password.style.border = border_green;
      Password.style.color = green;
      return true;
   }
};
let show = document.querySelector(".show");
let hide = document.querySelector(".hide");

show.addEventListener("click", () => {
   password.setAttribute("type", "text");
   show.style.display = "none";
   hide.style.display = "block";
});
hide.addEventListener("click", () => {
   password.setAttribute("type", "password");
   show.style.display = "block";
   hide.style.display = "none";
});

firebase
   .auth()
   .createUserWithEmailAndPassword(email, password)
   .then((user) => {
      console.log(user);
   })
   .catch((error) => {
      console.log("is there");
   });
