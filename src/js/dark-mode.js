let j;
document.querySelector('#light-mode').addEventListener('click',toggleModes);
let buttons = document.querySelectorAll('.light-btn');
let containersToToggleModes = document.querySelectorAll('.acrylic');
let h2 = document.querySelectorAll('.light-bg-h2');
let themeToggler = document.querySelector('#light-mode');
let togglerBtn = document.querySelector('#light-mode');
let bg = document.querySelector('.light-bg');

function toggleModes(){
   
// console.log(mediumsToToggleModes);
right_container.textContent = "";
bg.classList.toggle('light-bg');
bg.classList.toggle('dark-bg');

hide_btn.classList.toggle('light-bg-toggler');
hide_btn.classList.toggle('dark-bg-toggler');

themeToggler.classList.toggle('light-bg-toggler');
themeToggler.classList.toggle('dark-bg-toggler');

if(togglerBtn.textContent.includes("Night Mode")){
    togglerBtn.textContent = "Light Mode";
}
else if(togglerBtn.textContent.includes("Light Mode")){
    togglerBtn.textContent = "Night Mode";
}


    for(j=0;j<=3;j++){
        h2[j].classList.toggle('light-bg-h2');
        h2[j].classList.toggle('dark-bg-h2');

    }
    for(j=0;j<=3;j++){
        buttons[j].classList.toggle('light-btn');
        buttons[j].classList.toggle('dark-btn');
    }
    for(j=0; j<=5; j++){
        containersToToggleModes[j].classList.toggle('acrylic');
        containersToToggleModes[j].classList.toggle('acrylic-dark');
    }
   


}




