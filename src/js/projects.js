let projectsBtn = document.querySelector('#projects-btn');
projectsBtn.addEventListener('click', callProjects);




function callProjects() {
    screenWidth = window.innerWidth;
    if (screenWidth < 1000) {
        if (bg.classList.contains("light-bg")) {
            left_container.innerHTML = `
            <div class="back"><- Click this text to go Back</div>   <h1 class="projects-title">Projects</h1>
    
        <div class="project acrylic medium-high shadow fade-in-from-top">
        
        <img src="src/img/fotobrom-screen.png" class="shadow" alt=""></img>
        <a href="http://www.fotobrom.pl" target="_blank" class="go-to-website">Go!</a>
        <h2>FotoBrom</h2>  
        <p>Fotobrom official website. Technologies used: Bootstrap, JQuery</p>
        </div>
    
        <div class="project acrylic medium-high shadow fade-in-from-top">
        
        <img src="src/img/kamyilos.png" class="shadow" alt=""></img>
        <a href="https://github.com/Kamyil/KamyilOS" target="_blank"><i class="devicon-github-plain"></i></a>
    
        <h2>KamyilOS</h2>  
        <p>Mini operating system app. Technologies used: pure JavaScript
        </p>
    
        </div>
    
        <div class="project acrylic medium-high shadow fade-in-from-top">
        
        <img src="src/img/invo.png" class="shadow" alt=""></img>
        <a href="https://github.com/Kamyil/invo" target="_blank"><i class="devicon-github-plain"></i></a>
    
        <h2>Invoker</h2>  
        <p>Simulator of one of the hardest heroes in Dota 2. Players can learn invoking spells, do Invoke Challenge, customize binds, buy items, and check his stats per level.
        Technologies used: Pure JavaScript, SCSS   </p>
    
    
        </div>
    
        <div class="project acrylic medium-high shadow fade-in-from-top">
        
        <img src="src/img/pomieszczeniometr.png" class="shadow" alt=""></img>
        <a href="https://github.com/Kamyil/Pomieszczeniometr" target="_blank"><i class="devicon-github-plain"></i></a>
    
        <h2>Room-O-Meter</h2>  
        <p>Room calculator app with real time calculating. App is avalaible for web and PC(Windows, Mac, Linux). Technologies used: AngularJS, Electron.js</p>
    
        </div>
        `;}
        else{
            left_container.innerHTML = `
        <div class="back"><- Click this text to go Back</div> <h1 class="projects-title">Projects</h1>
    
        <div class="project acrylic-dark medium-high shadow fade-in-from-top">
        
        <img src="src/img/fotobrom-screen.png" class="shadow" alt=""></img>
        <a href="http://www.fotobrom.pl" target="_blank" class="go-to-website">Go!</a>
        <h2>FotoBrom</h2>  
        <p>Fotobrom official website. Technologies used: Bootstrap, JQuery</p>
        </div>
    
        <div class="project acrylic-dark medium-high shadow fade-in-from-top">
        
        <img src="src/img/kamyilos.png" class="shadow" alt=""></img>
        <a href="https://github.com/Kamyil/KamyilOS" target="_blank"><i class="devicon-github-plain"></i></a>
    
        <h2>KamyilOS</h2>  
        <p>Mini operating system app. Technologies used: pure JavaScript
        </p>
    
        </div>
    
        <div class="project acrylic-dark medium-high shadow fade-in-from-top">
        
        <img src="src/img/invo.png" class="shadow" alt=""></img>
        <a href="https://github.com/Kamyil/invo" target="_blank"><i class="devicon-github-plain"></i></a>
    
        <h2>Invoker</h2>  
        <p>Simulator of one of the hardest heroes in Dota 2. Players can learn invoking spells, do Invoke Challenge, customize binds, buy items, and check his stats per level.
        Technologies used: Pure JavaScript, SCSS   </p>
    
    
        </div>
    
        <div class="project acrylic-dark medium-high shadow fade-in-from-top">
        
        <img src="src/img/pomieszczeniometr.png" class="shadow" alt=""></img>
        <a href="https://github.com/Kamyil/Pomieszczeniometr" target="_blank"><i class="devicon-github-plain"></i></a>
    
        <h2>Room-O-Meter</h2>  
        <p>Room calculator app with real time calculating. App is avalaible for web and PC(Windows, Mac, Linux). Technologies used: AngularJS, Electron.js</p>
    
        </div>`;

        }
            backBtn = document.querySelector('.back');
            backBtn.addEventListener('click', () => {
                if (bg.classList.contains("dark-bg")) {
                    left_container.innerHTML = `
            <img src="img/kamil_prof_linkedIn.png" alt="Kamil Bugajak's profile picture.">
            <h1>Kamil Bugajak</h1>
            <h2 class="dark-bg-h2">front-end developer</h2>
            <h2 class="dark-bg-h2">graphic designer</h2>
            <h2 class="dark-bg-h2">UI/UX designer</h2>
            <h2 class="dark-bg-h2">photographer</h2>
        
            <button class="dark-btn" id="bio-btn">Bio <span>></span></button>
            <button class="dark-btn" id="skills-btn">Skills <span>></span></button>
            <button class="dark-btn" id="projects-btn">Projects<span>></span></button>
            <button class="dark-btn" id="text-me-btn">Text me<span>></span></button>
        
            <button id="dark-mode" class="dark-bg-toggler">Light Mode</button>`;
            bioBtn = document.querySelector('#bio-btn');
                bioBtn.addEventListener('click', callBio);
                    projectsBtn = document.querySelector('#projects-btn');
                    projectsBtn.addEventListener('click', callProjects);
                    skillsBtn = document.querySelector('#skills-btn');
skillsBtn.addEventListener('click',callSkills);
textMeBtn = document.querySelector('#text-me-btn');
textMeBtn.addEventListener('click',callTextMe);

                    document.querySelector('#dark-mode').addEventListener('click', toggleModes);
                    buttons = document.querySelectorAll('.dark-btn');
                    containersToToggleModes = document.querySelectorAll('.acrylic-dark');
                    h2 = document.querySelectorAll('.dark-bg-h2');
                    themeToggler = document.querySelector('#dark-mode');
                    togglerBtn = document.querySelector('#dark-mode');
                    bg = document.querySelector('.dark-bg');


                } else {
                    left_container.innerHTML = `
        <img src="src/img/kamil_prof_linkedIn.png" alt="Kamil Bugajak's profile picture.">
        <h1>Kamil Bugajak</h1>
        <h2 class="light-bg-h2">front-end developer</h2>
        <h2 class="light-bg-h2">graphic designer</h2>
        <h2 class="light-bg-h2">UI/UX designer</h2>
        <h2 class="light-bg-h2">photographer</h2>
    
        <button class="light-btn" id="bio-btn">Bio <span>></span></button>
        <button class="light-btn" id="skills-btn">Skills <span>></span></button>
        <button class="light-btn" id="projects-btn">Projects<span>></span></button>
        <button class="light-btn" id="text-me-btn">Text me<span>></span></button>
    
        <button id="light-mode" class="light-bg-toggler">Night Mode</button>`;
        bioBtn = document.querySelector('#bio-btn');
        bioBtn.addEventListener('click', callBio);
                    projectsBtn = document.querySelector('#projects-btn');
                    projectsBtn.addEventListener('click', callProjects);
                    skillsBtn = document.querySelector('#skills-btn');
skillsBtn.addEventListener('click',callSkills);
textMeBtn = document.querySelector('#text-me-btn');
textMeBtn.addEventListener('click',callTextMe);

                    document.querySelector('#light-mode').addEventListener('click', toggleModes);
                    buttons = document.querySelectorAll('.light-btn');
                    containersToToggleModes = document.querySelectorAll('.acrylic');
                    h2 = document.querySelectorAll('.light-bg-h2');
                    themeToggler = document.querySelector('#light-mode');
                    togglerBtn = document.querySelector('#light-mode');
                    bg = document.querySelector('.light-bg');
                }
            });

      
            
            projectsBtn = document.querySelector('#projects-btn');
            projectsBtn.addEventListener('click', callProjects);
            document.querySelector('#dark-mode').addEventListener('click', toggleModes);
            buttons = document.querySelectorAll('.dark-btn');
            containersToToggleModes = document.querySelectorAll('.acrylic-dark');
            h2 = document.querySelectorAll('.dark-bg-h2');
            themeToggler = document.querySelector('#dark-mode');
            togglerBtn = document.querySelector('#dark-mode');
            bg = document.querySelector('.dark-bg');
        }

     else if (screenWidth >= 1000) {
        if (bg.classList.contains("light-bg")){
        content_container.innerHTML = `
    <h1>Projects</h1>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="src/img/fotobrom-screen.png" class="shadow" alt=""></img>
    <a href="http://www.fotobrom.pl" target="_blank" class="go-to-website">Go!</a>
    <h2>FotoBrom</h2>  
    <p>Fotobrom official website. Technologies used: Bootstrap, JQuery</p>
    </div>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="src/img/kamyilos.png" class="shadow" alt=""></img>
    <a href="https://github.com/Kamyil/KamyilOS" target="_blank"><i class="devicon-github-plain"></i></a>

    <h2>KamyilOS</h2>  
    <p>Mini operating system app. Technologies used: pure JavaScript
    </p>

    </div>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="src/img/invo.png" class="shadow" alt=""></img>
    <a href="https://github.com/Kamyil/invo" target="_blank"><i class="devicon-github-plain"></i></a>

    <h2>Invoker</h2>  
    <p>Simulator of one of the hardest heroes in Dota 2. Players can learn invoking spells, do Invoke Challenge, customize binds, buy items, and check his stats per level.
    Technologies used: Pure JavaScript, SCSS   </p>


    </div>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="src/img/pomieszczeniometr.png" class="shadow" alt=""></img>
    <a href="https://github.com/Kamyil/Pomieszczeniometr" target="_blank"><i class="devicon-github-plain"></i></a>

    <h2>Room-O-Meter</h2>  
    <p>Room calculator app with real time calculating. App is avalaible for web and PC(Windows, Mac, Linux). Technologies used: AngularJS, Electron.js</p>

    </div>
    `;
        } else if (bg.classList.contains("dark-bg")) {
            content_container.innerHTML = `
    <h1>Projects</h1>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="src/img/fotobrom-screen.png" class="shadow" alt=""></img>
    <a href="http://www.fotobrom.pl" target="_blank" class="go-to-website">Go!</a>
    <h2>FotoBrom</h2>  
    <p>Fotobrom official website. Technologies used: Bootstrap, JQuery</p>
    </div>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="src/img/kamyilos.png" class="shadow" alt=""></img>
    <a href="https://github.com/Kamyil/KamyilOS" target="_blank"><i class="devicon-github-plain"></i></a>

    <h2>KamyilOS</h2>  
    <p>Mini operating system app. Technologies used: pure JavaScript
    </p>

    </div>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="src/img/invo.png" class="shadow" alt=""></img>
    <a href="https://github.com/Kamyil/invo" target="_blank"><i class="devicon-github-plain"></i></a>

    <h2>Invoker</h2>  
    <p>Simulator of one of the hardest heroes in Dota 2. Players can learn invoking spells, do Invoke Challenge, customize binds, buy items, and check his stats per level.
    Technologies used: Pure JavaScript, SCSS   </p>


    </div>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="src/img/pomieszczeniometr.png" class="shadow" alt=""></img>
    <a href="https://github.com/Kamyil/Pomieszczeniometr" target="_blank"><i class="devicon-github-plain"></i></a>

    <h2>Room-O-Meter</h2>  
    <p>Room calculator app with real time calculating. App is avalaible for web and PC(Windows, Mac, Linux). Technologies used: AngularJS, Electron.js</p>

    </div>`;
        }
    }
};

