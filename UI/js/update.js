let update_form = document.getElementById("update_form");
const id = window.location.hash.replace("#", "");
let blog_title = document.getElementById("title");
let blog_content = document.getElementById("body");
let update_popup = document.querySelector(".update-popup");
blog_content.value = doc.data().body;
blog_title.value = doc.data().title;

db.collection("Blog")
   .doc(id)
   .get()
   .then((doc) => {
      update_form.innerHTML = `
          <label for="title">
            Title
            <input type="text" id="title" name="title" value='${
               doc.data().title
            }'>

          </label>

          <label for="content">
            Body
            <textarea name="body" id="body" cols="30" rows="10">${
               doc.data().body
            }</textarea>

          </label>
          <label for="image">
            Image
            <input type="file" name="image">

          </label>
          <label for="button">
<a href="javascript:update_blog('${doc.id}')">Update</a>
           
          </label>`;
   });
update_blog = (id) => {
   db.collection("Blog")
      .doc(id)
      .update({
         title: blog_title.value,
         body: blog_content.value,
      })
      .then((res) => {
         update_popup.style.display = "flex";
         setTimeout(() => {
            window.location.href = "/UI/admin post/post/all.html";
         }, 5000);
      })
      .catch((error) => {
         console.log(error.message);
      });
   console.log(blog_title.value);
};
