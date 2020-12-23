let queries = document.getElementById('queries');
let post = document.getElementById("blog");
let subscribers = document.getElementById("subscribers");
let users = document.getElementById("user");
let subscribersEmail = document.getElementById("subscriber");



db.collection("Blog")
   .get()
  .then((all_blog) => {
    post.innerHTML += all_blog.size;
     
  });
db.collection("subscribers")
   .get()
  .then((sub) => {
    subscribers.innerHTML += sub.size;

    sub.forEach(doc => {
      
      subscribersEmail.innerHTML +=`  
      <tr class="table-row">
      <td class="content">${doc.data().email}</td>
      </tr>`
    });
    subscribersEmail.style.marginBottom = '3em';
     
   });db.collection("Blog")
   .get()
  .then((query) => {
    queries.innerHTML += query.size;
     
   });