
let articles= document.querySelector('.blog-section');
displayarticles =(doc)=>{
 storageref = firebase.storage().ref().child(`/blogimage/backend.jpg`).getDownloadURL().then(function(url) {
  articles.innerHTML+=`
  <div class="blog-top" id="${doc.id}">
  <div class="blog-post">
    <div class="blog-img"><img src="${url}" alt="html" /></div>
    <div class="blog-desc">
      <div class="title">
        <h3>${doc.data().title}</h3>
      </div>
      <div class="text">
        <p>
        ${doc.data().subbody}
        </p>
      </div>
      <div class="button">
        <a href="/UI/html/singleblog.html">View more</a>
      </div><br>
    </div>
  </div>
</div>`;
}).catch(function(error) {
  console.log(`there is an error${error.message}`);
  });
 }
// 
db.collection("blog")
    .get()
    .then((querySnapshotss) => {
      querySnapshotss.forEach((doc) => {
 displayarticles(doc);

      });
    });
  
  let createpost = document.querySelector(" form");
   createpost.addEventListener('submit',(e)=>{
       e.preventDefault();
       db.collection("blog").add({
        title: createpost.title.value,
        subbody: createpost.subbody.value,
        body: createpost.body.value,
      });
    createpost.title.value='',
    createpost.subbody.value='', 
  createpost.body.value=''
 })
   
 let fileb = document.getElementById('file');
    fileb.addEventListener('change',(es)=>{
       // get file
       var file =es.target.files[0];
        var storageRef = firebase.storage().ref().child(`/blogimage/${file.name}`);
        // uploder file
        storageRef.put(file).then(()=>{
          console.log("ok");
     }).catch((error)=>{
       console.log(error.message);
     });
    });
 

 