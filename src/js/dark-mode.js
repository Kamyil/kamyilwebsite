let j;
document.querySelector('#light-mode').addEventListener('click',toggleModes);
let buttons = document.querySelectorAll('.light-btn');
let containersToToggleModes = document.querySelectorAll('.acrylic');


let togglerBtn = document.querySelector('#light-mode');
let bg = document.querySelector('.light-bg');
function toggleModes(){
   
// console.log(mediumsToToggleModes);

bg.classList.toggle('light-bg');
bg.classList.toggle('dark-bg');
if(togglerBtn.textContent = "Ciemny Motyw"){
    togglerBtn.textContent = "Jasny Motyw";
}
else if(togglerBtn.textContent = "Jasny Motyw"){
    togglerBtn.textContent = "Ciemny Motyw";
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




