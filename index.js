const inputRef = document.querySelector('#js-input');
const formRef = document.querySelector('#js-form');

inputRef.addEventListener('input', textHandler);
formRef.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e){
    e.preventDefault();
   
    e.target.reset();
    localStorage.removeItem('text')
}

populateMassege()

function textHandler(e){
   const value = e.target.value;
   localStorage.setItem("text", value);  
}

function populateMassege(){
    const savedMassege = localStorage.getItem('text')


    if(savedMassege){
        inputRef.value = savedMassege;
    }
}

