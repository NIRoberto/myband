let  update_form = document.querySelector('#formm');
const id =window.location.hash.replace("#","");

 post_info =(doc)=> {
   update_form.innerHTML =`
    <div class="ele">
    Title       </div>  <div class="ele">
    <input type="hidden" id="title" placeholder="" name ="title" value="${doc.id}">       </div>  <div class="ele">
    
    <input type="text" id="title" placeholder="" name ="title" value="${doc.data().title}">       </div>  <div class="ele">
    Sub-body       </div>  <div class="ele">
    <textarea name="subbody" id="textarea" cols="30" rows="3">  ${doc.data().subbody}</textarea>      </div>   <div class="ele">
    
    Body       </div>  <div class="ele">
    <textarea name="body" id="textarea" cols="30" rows="9">${doc.data().body}</textarea>       </div>  <div class="ele">
     Image        </div>  <div class="ele">
    <input type="file" id="file"  placeholder="image">      </div>  <div class="ele"><br> 
              <button class="updatess" onclick=' return updates()'> Update</button>
    </div>   <div class="ele">
          </div>
     `;
}
db.collection("blog")
    .doc(id)
  .get()

  .then(doc => {
  
      post_info(doc);
    
  });


let put = document.querySelector('#formm');
updates=(id)=>{
// To update age and favorite color:
   db.collection("blog").doc(id).update({
     title: put.title.value,
     body: put.body.value,
     subbody: put.subbody.value,
 }).then(() => {
     alert("update has done.");
     window.location.href = '/UI/admin post/post/all.html';

   }).catch((error) => {
     alert(error.message);
   });
     
}
