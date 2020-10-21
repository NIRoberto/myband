let updatess = document.querySelector('.add-new-post #formm');
let updateinfo =document.querySelector('.update .update-section');
 postinfo =(doc)=> {
    updatess.innerHTML =`
    Title
    <input type="text" id="title" placeholder="" name ="title" value="${doc.data().title}">
    Sub-body
    <textarea name="subbody" id="textarea" cols="30" rows="3">  ${doc.data().subbody}</textarea>
    
    Body
    <textarea name="body" id="textarea" cols="30" rows="9">${doc.data().body}</textarea>
     Image 
    <input type="file" id="file"  placeholder="image"><br>
    <a href="javascript:updates('${doc.id}')" class="updatess">update</a> 
    
     `;


}
updatesss = (id) => {
window.location.href='/UI/admin post/post/update.html';
}
db.collection("blog")
  .get()
  .then((querySnapshotss) => {
    querySnapshotss.forEach((doc) => {
postinfo(doc);

    });
  });
let put = document.querySelector('#formm');
updates=(id)=>{
// To update age and favorite color:
 put.addEventListener("click", (e) => {
    e.preventDefault();
   db.collection("blog").doc(id).update({
     title: put.title.value,
     body: put.body.value,
     subbody: put.subbody.value,

    
   }).then(() => {
     alert("update has succefful done");
     window.location.href = '/UI/admin post/post/all.html';

   }).catch((error) => {
     alert(error.message);
   });
     put.title.value="",
    put.body.value="",
    put.subbody.value=""
 })
}
