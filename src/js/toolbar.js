const settings = {
    dark:'dark-theme',
    light:'light-theme'
}

const switchRef = document.querySelector('#theme-switch-toggle');


switchRef.addEventListener('change',changeTheme);

function changeTheme(e){
    if(e.currentTarget.checked){
        chooseColor(settings.light,settings.dark)
    }

    else(chooseColor(settings.dark,settings.light))  

    localStorage.setItem('theme',
    e.target.checked ? settings.dark : settings.light,)

}

function chooseColor(oldTheme,newTheme){
    document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.add(savedTheme);
  switchRef.checked = savedTheme === settings.dark;
}