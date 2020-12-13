let all_post = document.getElementById("all_post");
let create_post_form = document.getElementById("form");
let title = document.getElementById("title");
let content = document.getElementById("editor");
let file = document.getElementById("file");
let error_title = document.getElementById("title_error");
let error_body = document.getElementById("body_error");
let create_popup = document.querySelector(".create-popup");
let delete_popup = document.querySelector(".delete-popup");
let blog_text = document.getElementsByClassName("text");

let red = "red";
border_red = "1px solid red";
let date = new Date();

db.collection("Blog")
   .get()
   .then((post) => {
      post.forEach((doc) => {
         all_post.innerHTML += `
      <div class="single-post" >
          <div class="img">
            <img src="/UI/img/my journey.png" alt="blog image">
          </div>
          <div class="header"><a href="/UI/html/blog.html" class="title">${
             doc.data().title
          }</a></div>
          <div class="body">
            <p class="text">
            ${doc.data().body.substr(0, 150)}...
            </p>
          </div>
          <div class="button">
            <div class="date">
              <p class="date"> ${date.toDateString()}</p>

            </div>
            <div class="action-btn">
              <a href="javascript:update_post('${
                 doc.id
              }')" class="edit">Update</a>
              <a href="javascript:delete_post('${
                 doc.id
              }')" class="delete">Delete</a>
            </div>

          </div><br><br>
        </div>
    `;
      });
   });

delete_post = (id) => {
   db.collection("Blog")
      .doc(id)
      .delete()
      .then(() => {
         delete_popup.style.display = "flex";
         setTimeout(() => {
            window.location.href = "/UI/admin post/post/all.html";
         }, 6000);
      })
      .catch((error) => {
         console.log(error.message);
      });
};
update_post = (id) => {
   window.location.href = "/UI/admin post/post/update.html#" + id;
};

create_post_form.addEventListener("submit", (e) => {
   e.preventDefault();
   if (validate()) {
      return true;
   }
});

validate = () => {
   if (title.value.trim() === "" || content.value.trim() === "") {
      error_title.innerHTML = "please title is required";
      error_title.style.color = red;
      title.style.border = border_red;
      error_body.innerHTML = "please body is required";
      error_body.style.color = red;
      content.style.border = border_red;
   } else {
      error_title.innerHTML = "";
      error_title.style.color = red;
      title.style.border = "3px solid #1187ee";
      error_body.innerHTML = "";
      content.style.border = "3px solid #1187ee";
      db.collection("Blog")
         .add({
            title: title.value,
            body: content.value,
         })
         .then((res) => {
            create_popup.style.display = "flex";
            create_popup.style.transition = "2s ease-in";
            setTimeout(() => {
               window.location.href = "/UI/admin post/post/create.html";
            }, 6000);
         })
         .catch((error) => {
            console.log(error.message);
         });
   }
};
