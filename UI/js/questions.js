let quest = document.querySelector("form");
let viewquerie =document.querySelector('  .users-table');


viewqueries =(doc)=>{
    viewquerie.innerHTML +=`  
    <tr class="row">
    <td class="td">${doc.data().fname}</td>
    <td class="td">${doc.data().email}</td>
    <td>${doc.data().message}</td>
    <td id="update"> <a href="update" id="update">update</a></td>
    <td id="delete"><a href="javascript:questdelete('${doc.id}')" id="delete">delete</a><td>
</tr>`;
}
db.collection("questions")
  .get()
  .then((querySnapshots) => {
    querySnapshots.forEach((doc) => {
      viewqueries(doc);
     
    });
  });
  questdelete = (id) => {
    if (confirm("Are you sure you want to delete this question")) {
       db.collection("questions")
       .doc(id).delete().then((res) => {
         window.location.href = "/UI/admin post/queries/all.html";
       });
     } else {
     alert('ok');
       
     }
     
   };
  quest.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("questions").add({
      fname: quest.fname.value,
      email: quest.email.value,
      subject: quest.subject.value,
      message: quest.message.value,

    });
  quest.fname.value='',
  quest.email.value='',
  quest.subject.value='',
  quest.message.value=''
});

