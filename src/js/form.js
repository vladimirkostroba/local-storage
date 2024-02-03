const formRef = document.querySelector('.form');
const textareaRef = document.querySelector('.js-textarea');
const articlesRef = document.querySelector('.articles');
console.log( textareaRef);


formRef.addEventListener('submit', handleFormSubmit);
textareaRef.addEventListener('input', handleTextAreaInput);


populateMassege();

function handleFormSubmit(e){
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem('messege')

  const article = {
    name:e.target.name.value,
    feedback:e.target.feedback.value,
}


}

function handleTextAreaInput(e){
    const messege = e.currentTarget.value;
    localStorage.setItem('messege',messege);  
}

function populateMassege(){
    const savedMassage = localStorage.getItem('messege');

if(savedMassage){
    textareaRef.value = savedMassage;
 }
 }

//  

function createFeedback(obj){
    return `
  <li class="feedbacks__item">
    <h2 class="name">${obj.name}</h2>
    <p class="text">${obj.feedback}</p>
  </li>`
}




