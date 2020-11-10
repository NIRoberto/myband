let userinfo = document.querySelector('.users-table');
auth.onAuthStateChanged(function (user) {
  if (user) {
    // admin create
    if (user.email === 'robz@gmail.com') {
       userinfo.innerHTML +=
        `<tr class="row">
        <td class="td">robz admin </td>
        <td class="td">${user.email}</td>
        <td id="update"> <a href="javascript:updatss('${user.uid}')" id="update">update</a></td>
        <td id="delete"><a href="javascript:userdelete('${user.uid}')" id="delete">delete</a><td>
       </tr>`;
     }
// admin creating
    else {

      }
  } else {
    alert('login first');
    window.location.href = '/UI/html/loginpage.html';
  }
});
updatss = (id) => {
  let updateB = document.querySelector('#update');
  updateB.addEventListener('click', (res) => {
    document.querySelector('.update').style.display = 'flex';
    res.innerHTML += `
 `;
  })
  let close = document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.update').style.display = 'none';
  });
}

//  logout 
let logout = document.getElementById('log');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then((e) => {
    alert("had succefull signed out");

  }).catch((error) => {
    alert(error.message);

  });
}); 

