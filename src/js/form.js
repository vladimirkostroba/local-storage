const formRef = document.querySelector('.form');
const textareaRef = document.querySelector('.js-textarea');
const feedbacksRef = document.querySelector('.feedbacks');


// 


formRef.addEventListener('submit', handleFormSubmit);
textareaRef.addEventListener('input', handleTextAreaInput);

// 

populateMassege();

// 

function handleFormSubmit(e){
  e.preventDefault();
  localStorage.removeItem('messege')

  const feedback = {
    name:e.target.name.value,
    feedback:e.target.feedback.value,
}

  createFeedback(feedback);

  e.currentTarget.reset();
}

// 

function handleTextAreaInput(e){
    const messege = e.currentTarget.value;
    localStorage.setItem('messege',messege);  
}

// 

function populateMassege(){
    const savedMassage = localStorage.getItem('messege');

if(savedMassage){
    textareaRef.value = savedMassage;
 }
 }

//  

function createFeedback(obj){
    const markup = `
  <li class="feedbacks__item">
    <h2 class="name">Name: ${obj.name}</h2>
    <p class="text">Feedback: ${obj.feedback}</p>
  </li>`

    feedbacksRef.insertAdjacentHTML('beforeend',markup)
}




