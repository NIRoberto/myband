let signupform =document.querySelector('#formm');
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
      // get user information
      const email =signupform['semail'].value;
      const password= signupform['spassword'].value;
      // signup for the new user
      auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
       }).catch((error)=> {
    console.log(error.message);
    alert(error.message);
    window.location.href='/UI/admin post/post/all.html';
  
        });
      });
    