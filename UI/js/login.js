let email = document.getElementById("email");
let password = document.getElementById("password");
let check = document.getElementById("check");

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
   if (valid_email() && valid_password()) {
      firebase
         .auth()
         .signInWithEmailAndPassword(email.value, password.value)
         .then((cred) => {
            popup.style.display = "flex";
            user.innerHTML = `Logged in as ${email.value}`;
            ok.addEventListener("click", () => {
               popup.style.display = "none";
               window.location.href = "/UI/html/blog.html";
            });
            console.log("user has logged in ", cred.user);
         })
         .catch((error) => {
            check.innerHTML = `Incorrect email or password`;
         });

      return true;
   } else {
      popup.style.display = "none";
   }
});

valid_email = () => {
   if (!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      check.innerHTML = "Incorrect email or password";
      email.style.border = border_red;
      password.style.border = border_red;

      check.style.color = red;
      check.style.textAlign = center;
   } else {
      check.innerHTML = "";
      email.style.border = border_green;
      return true;
   }
};
valid_password = () => {
   if (!password.value.match(password_regex)) {
      check.innerHTML = "Incorrect email or password";
      email.style.border = border_red;
      password.style.border = border_red;
      check.style.color = red;
      check.style.textAlign = center;
   } else {
      password.style.border = border_green;
      return true;
   }
};
