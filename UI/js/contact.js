
let mname =document.getElementById('m1');
let memail =document.getElementById('m2');
let mmessage =document.getElementById('m4');
let name =document.getElementById('name');
let email =document.getElementById('email');
let message =document.getElementById('message');
let nameregex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
let messageregex = /^[ \t]+/;
console.log(message.value);
 contact =()=>{
if(!(name.value.trim())&& !(email.value.trim())&&!(message.value.trim())){
    mname.innerHTML="space not allowed";
    mname.style.color="rgb(73, 4, 4)";
    memail.innerHTML="space not allowed";
    memail.style.color="rgb(73, 4, 4)";
    mmessage.innerHTML="space not allowed";
    mmessage.style.color="rgb(97, 3, 3)";
 
    return false;
}
      if(!(nameregex.test(name.value))&&!(email.value.trim())&&!(messageregex.test(message.value))){
 
    mname.innerHTML="enter valid name";
    mname.style.color="rgb(97, 3, 3)";
    memail.innerHTML="space not allowed";
    memail.style.color="rgb(97, 3, 3)";
  mmessage.innerHTML=" enter valid subject";
  mmessage.style.color="rgb(97, 3, 3)";
    return false;
}

else{
         name.value = "";
        email.value = "";
        message.value = "";
          
  
    return true;
}
}