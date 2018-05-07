let hide_btn = document.querySelector('.interface-show');
let left_container = document.querySelector('#left-bar-container');
let right_container = document.querySelector('#right-bar-container');

hide_btn.addEventListener('click',toggleView);


function toggleView(){

    if(left_container.style.display&&right_container.style.display == "block"){
        left_container.style.display = "none";
        left_container.classList.add = "fade-out";
        left_container.classList.remove = "fade-in";

        right_container.style.display = "none";
        right_container.classList.add = "fade-out";
        right_container.classList.remove = "fade-in";

        
        hide_btn.textContent = "Show";
    }
    else{
        left_container.style.display = "block";
        left_container.classList.add = "fade-in";
        left_container.classList.remove = "fade-out";

        right_container.style.display = "block";
        right_container.classList.add = "fade-in";
        right_container.classList.remove = "fade-out";

        hide_btn.textContent = "Hide";
    }



}

