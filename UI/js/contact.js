let f_name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("textarea");
let name_m = document.getElementById("name_message");
let mail_m = document.getElementById("email_message");
let message_e = document.getElementById("message");
let form = document.getElementById("form");
let popup = document.querySelector(".popup");
let ok = document.getElementById("btn");
let Edit = document.querySelectorAll("#update");
let update_form = document.getElementById("question-update");
let cancel = document.getElementById("cancel");
let Delete = document.querySelectorAll("#delete");
let btn = document.getElementById("btn-update");
let btn_delete = document.getElementById("btn-update");

let update_popup = document.querySelector(".update-popup");
let delete_popup = document.querySelector(".delete-popup");
let name_regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
let message_regex = /[0-9A-Za-z]/;
var red = "red";
var green = "green";
var border_green = "1px solid green";
var border_red = "1px solid red";

let questions = document.querySelector("#questions");
let date = new Date();

db.collection("questions")
   .get()
   .then((quest) => {
      quest.forEach((doc) => {
         questions.innerHTML += `
       <div class="questions">
          <div class="fullname">
            <div class="name">
              ${doc.data().full_name}
            </div>
            <div class="date">
              ${date.toDateString()}
            </div>
          </div>
          <div class="question">
            ${doc.data().message}

          </div>
          <div class="actions">
            <div class="edit"><a href="#" class="edit" id="update">Update</a></div>
            <div class="Delete"><a href="javascript:delete_question('${
               doc.id
            }')" class="delete" id="delete">delete</a></div>
            </div>

        </div>
    `;
      });
   });

delete_question = (id) => {
   db.collection("questions")
      .doc(id)
      .delete()
      .then(function () {
         delete_popup.style.display = "flex";
         delete_popup.style.animation = " Delete 4s linear  forwards";
         setTimeout(() => {
            window.location.href = "/UI/admin post/queries/all.html";
         }, 6000);
      })
      .catch(function (error) {
         console.error("Error removing document: ", error);
      });
};

form.addEventListener("submit", (e) => {
   e.preventDefault();
   if (full_name() && valid_email() && valid_message()) {
      db.collection("questions")
         .add({
            full_name: f_name.value,
            email: email.value,
            message: message.value,
         })
         .then(() => {
            popup.style.display = "flex";
            popup.style.transition = "2s ease-in";
            ok.addEventListener("click", () => {
               popup.style.display = "none";
               window.location.href = "/UI/html/contact.html";
            });
         });
      return true;
   } else {
      popup.style.display = "none";
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
      message_e.innerHTML = "Please type your message here";
      message.style.border = border_red;
      message_e.style.color = red;
   } else {
      message_e.innerHTML = "Message is valid";
      message.style.border = border_green;
      message_e.style.color = green;
      return true;
   }
};
