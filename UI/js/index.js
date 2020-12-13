
const body = document.getElementsByTagName('div');
let humber_burg = document.querySelector('.fas');
let burger = document.querySelector('.fa-times');


// fas fa-times
const link = document.querySelectorAll('.sidebar-link  span');
 sidebar =()=> {
   body.item(1).classList.toggle('sidebar-expand');
   link.forEach((link, index) => {
     if (link.style.animation) {
       link.style.animation = '';
     }else{
       link.style.animation = `link 2s ease-in forwards`;
     }

   })
    humber_burg.classList.toggle('fa-times');

}
//  search input field
const searchbar = document.querySelector('input');
let search_btn = document.querySelector('.fa-search');
search_btn.addEventListener('click', () => {
  const term = searchbar.value.toLowerCase();

  const single_question = document.querySelectorAll('.questions');
  const single_blog = document.querySelectorAll('.single-post');
  const not = document.querySelector('.not-found h5');
  
  Array.from(single_blog).forEach(single_blog => {
    const blog = single_blog.textContent;
  if (blog.toLowerCase().indexOf(term) !== -1) {
    single_blog.style.display = 'flex';

}
  else {
    single_blog.style.display = 'none';
    
    }
    })
Array.from(single_question).forEach( single_question => {
  const quest = single_question.textContent;

  if (quest.toLowerCase().indexOf(term) !== -1) {
    single_question.style.display = 'flex';

}
  else{
    single_question.style.display = 'none';
  }
  })


})
// let Edit = document.getElementsByClassName('edit');
let Edit = document.querySelectorAll('#update');
let update_form = document.getElementById('question-update');
let cancel = document.getElementById('cancel');
let Delete = document.querySelectorAll('#delete');
let btn = document.getElementById('btn-update');
let btn_delete = document.getElementById('btn-update');

let update_popup = document.querySelector('.update-popup');
let delete_popup = document.querySelector('.delete-popup');


btn.addEventListener('click', () => {
   
  update_form.style.display = 'none';
  update_popup.style.display = 'flex';
  setTimeout(() => {
      window.location.href = "/UI/admin post/queries/all.html";
  }, 10000)
})

cancel.addEventListener('click', () => {
  update_form.style.display = 'none';
  
})

Array.from(Edit).forEach(edit => {

  edit.addEventListener('click', (e) => {
    update_form.style.display = 'flex';


})
});
Array.from(Delete).forEach(quest_delete => {
  quest_delete.addEventListener('click', () => {
     delete_popup.style.display = 'flex';
    delete_popup.style.animation = ' Delete 4s linear 1s forwards';
      setTimeout(() => {
       window.location.href = "/UI/admin post/queries/all.html";
      
    },6000)
    
  })
 
})





