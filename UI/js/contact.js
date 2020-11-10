let mname =document.getElementById('m1');
let memail =document.getElementById('m2');
let msubject =document.getElementById('m3');
let mmessage =document.getElementById('m4');
let name =document.getElementById('name');
let email =document.getElementById('email');
let subject =document.getElementById('subject');
let message =document.getElementById('message');
let emailregex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let nameregex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var a =nameregex.test(name.value);
 contact =()=>{
if(!(name.value.trim())&& !(email.value.trim())&&!(subject.value.trim())){
    mname.innerHTML="space not allowed";
    mname.style.color="red";
    memail.innerHTML="space not allowed";
    memail.style.color="red";
    msubject.innerHTML="space not allowed";
    msubject.style.color="red";
 
    return false;
}
 if(!(nameregex.test(name.value))&&!(email.value.trim())&&!(subject.value.trim())){
 
    mname.innerHTML="enter valid name";
    mname.style.color="red";
    memail.innerHTML="space not allowed";
    memail.style.color="red";
    msubject.innerHTML="space not allowed";
    msubject.style.color="red";
    return false;
}
else{
    mname.innerHTML="valid name";
    mname.style.color="green";
    memail.innerHTML="valid  email";
    memail.style.color="green";
    msubject.innerHTML="valid subject";
    msubject.style.color="green";
    window.location.href='/UI/html/index.html';

    return true;
}
}