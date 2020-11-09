
let post = document.querySelector(".list-allpost");
let setid =document.querySelector('.blog-top');


let storageref;

getblogpost = (doc) => {
 storageref = firebase.storage().ref().child(`/blogimage/backend.jpg`).getDownloadURL().then(function(url) {
     post.innerHTML += `
    <div class="blog-top" id="${doc.id}">
    <div class="blog-post">
      <div class="blog-img"><img class="imgs" src="${url}" alt="html" /></div>
      <div class="blog-desc">
        <div class="title">
          <h3 class="h3">${doc.data().title}</h3>
        </div>
        <div class="text">
          <p>
          ${doc.data().subbody}
          </p><br>
          <div class="button">
            <a href="javascript:updatesss('${doc.id}')" id="updates">edit</a>
            <a href="javascript:delet('${doc.id}')" id="deletes">Delete</a>
        </div>
        </div>
    </div>
    </div>
    <br /><br />
  </div>
    `;
  }).catch(function(error) {
    console.log(`there is an error${error.message}`);
    });
   
 
};
delet = (id) => {

  if (confirm("Are you sure you want to delete this blop post")) {
     db.collection("blog")
     .doc(id).delete().then((res) => {
       window.location.href = "/UI/admin post/post/all.html";
     });
    
   } else {
   alert('ok');
     
   }
   
 };

db.collection("blog")
  .get()
  .then((querySnapshots) => {
    querySnapshots.forEach((doc) => {
      getblogpost(doc);
    });
  });

