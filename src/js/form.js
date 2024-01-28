const formRef = document.querySelector('.form');


formRef.addEventListener('submit', createArticle);


function createArticle(e){
    e.preventDefault();

    const article = {
        titel:e.target.title.value,
        article:e.target.article.value,
    }

    e.target.reset();

}


