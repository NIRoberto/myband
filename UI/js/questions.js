let quest = document.querySelector(".form");

// let view_queries =document.querySelector(' #table .users-table');


// queries =(doc)=>{
//     view_queries.innerHTML +=`  
//     <tr class="row">
//     <td class="td">${doc.data().fname}</td>
//     <td class="td">${doc.data().email}</td>
//     <td>${doc.data().message}</td>
//     <td id="update"> <a href="update" id="update">update</a></td>
//     <td id="delete"><a href="javascript:questdelete('${doc.id}')" id="delete">delete</a><td>
// </tr>`;
// }
// db.collection("All_questions")
//   .get()
//   .then((querySnapshots) => {
//     querySnapshots.forEach((doc) => {
//       queries(doc);
     
//     });
//   });
//   questdelete = (id) => {
//     if (confirm("Are you sure you want to delete this question")) {
//        db.collection("questions")
//        .doc(id).delete().then((res) => {
//          window.location.href = "/UI/admin post/queries/all.html";
//        });
//      } else {
//      alert('ok');
       
//      }
     
// };
   
  quest.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("All_questions").add({
      fname: quest.fname.value,
      email: quest.email.value,
       message: quest.message.value

    }).then(quest => {
      alert(`questions send successfully`);

    }).catch((error) => {
      alert(error.message);
    })

  });
console.log(quest.email.value,quest);

