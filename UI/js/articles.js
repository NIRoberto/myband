let single_blog = document.getElementById("single_blog");
const id = window.location.hash.replace("#", "");

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
  <span><i class="fal fa-calendar-day"></i>  Feb 20 2020</span>
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
