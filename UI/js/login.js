let loginform =document.querySelector('#formm');
   
loginform.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email =loginform['email'].value;
  const password= loginform['password'].value;
  //   login 
   auth.signInWithEmailAndPassword(email,password).then((cred)=>{
       
       console.log('user has succefully logged in ',cred.user);
      window.location.href='/UI/admin post/post/all.html';
}).catch((error)=>{
       console.log(error.message);
       alert(error.message);
   });

});