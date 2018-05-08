let skillsBtn = document.querySelector('#skills-btn');
skillsBtn.addEventListener('click',callSkills);




function callSkills(){
    
        screenWidth = window.innerWidth;
    
    
        if (screenWidth < 1000) {
    
            if (bg.classList.contains("dark-bg")) {
                left_container.innerHTML = `
            <div class="back"><- Click this text to go Back</div>  <h1 class="skills-title">Skills</h1>
      
        

            <ul class="webdev acrylic-dark medium-high shadow fade-in">
            <h2>Web Development</h2>
                <li><i class="devicon-html5-plain"></i> <span class="icon-text">HTML</span>  </li>
                <li><i class="devicon-css3-plain"></i> <span class="icon-text">CSS</span> </li>
                <li><i class="devicon-javascript-plain"></i> <span class="icon-text">JavaScript (ES6) </span> </li>
                <li><i class="devicon-gulp-plain"></i> <span class="icon-text">GULP</span> </li>
                <li><i class="devicon-github-plain"></i> <span class="icon-text">Git/GitHub</span> </li>
                <li><i class="devicon-nodejs-plain"></i> <span class="icon-text">Node (NPM)</span> </li>
                <li><i class="devicon-atom-original"></i> <span class="icon-text">Electron</span>  </li>
                <li><i class="devicon-angularjs-plain"></i> <span class="icon-text">Angular </span> </li>
                <li><i class="devicon-react-original"></i> <span class="icon-text">React</span> </li>
                <li><i class="devicon-bootstrap-plain"></i> <span class="icon-text">Bootstrap</span>   </li>
                <li><i class="devicon-jquery-plain-wordmark"></i> <span class="icon-text">JQuery/JQuery UI </span> </li>
        
            </ul>
            
            <ul class="graphic acrylic-dark medium-high shadow fade-in">
            <h2>Graphic / UX&UI Design</h2>
                <li><span class="icon-text">Adobe Photoshop </span> </li>
                <li><span class="icon-text">Adobe Illustrator </span> </li>
                <li><span class="icon-text">Adobe InDesign </span> </li>
                <li></li>
            </ul>`;
            } else {
                left_container.innerHTML = `
            <div class="back"><- Click this text to go Back</div> <h1 class="skills-title">Skills</h1>
      
        

            <ul class="webdev acrylic medium-high shadow fade-in">
            <h2>Web Development</h2>
                <li><i class="devicon-html5-plain"></i> <span class="icon-text">HTML</span>  </li>
                <li><i class="devicon-css3-plain"></i> <span class="icon-text">CSS</span> </li>
                <li><i class="devicon-javascript-plain"></i> <span class="icon-text">JavaScript (ES6) </span> </li>
                <li><i class="devicon-gulp-plain"></i> <span class="icon-text">GULP</span> </li>
                <li><i class="devicon-github-plain"></i> <span class="icon-text">Git/GitHub</span> </li>
                <li><i class="devicon-nodejs-plain"></i> <span class="icon-text">Node (NPM)</span> </li>
                <li><i class="devicon-atom-original"></i> <span class="icon-text">Electron</span>  </li>
                <li><i class="devicon-angularjs-plain"></i> <span class="icon-text">Angular </span> </li>
                <li><i class="devicon-react-original"></i> <span class="icon-text">React</span> </li>
                <li><i class="devicon-bootstrap-plain"></i> <span class="icon-text">Bootstrap</span>   </li>
                <li><i class="devicon-jquery-plain-wordmark"></i> <span class="icon-text">JQuery/JQuery UI </span> </li>
        
            </ul>
            
            <ul class="graphic acrylic medium-high shadow fade-in">
            <h2>Graphic / UX&UI Design</h2>
                <li><span class="icon-text">Adobe Photoshop </span> </li>
                <li><span class="icon-text">Adobe Illustrator </span> </li>
                <li><span class="icon-text">Adobe InDesign </span> </li>
                <li></li>
            </ul>`;
    
            }
            let backBtn = document.querySelector('.back');
            backBtn.addEventListener('click', () => {
                if (bg.classList.contains("dark-bg")) {
                    left_container.innerHTML = `
                <img src="src/img/kamil_prof_linkedIn.png" alt="Kamil Bugajak's profile picture.">
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
    
        <button id="light-mode" class="light-bg-toggler">Night Mode</button>
        `;
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
        } else if (screenWidth >= 1000) {
            if (bg.classList.contains("dark-bg")) {
                content_container.innerHTML = `
                <h1>Skills</h1>
      
        

                <ul class="webdev acrylic-dark medium-high shadow fade-in">
                <h2>Web Development</h2>
                    <li><i class="devicon-html5-plain"></i> <span class="icon-text">HTML</span>  </li>
                    <li><i class="devicon-css3-plain"></i> <span class="icon-text">CSS</span> </li>
                    <li><i class="devicon-javascript-plain"></i> <span class="icon-text">JavaScript (ES6) </span> </li>
                    <li><i class="devicon-gulp-plain"></i> <span class="icon-text">GULP</span> </li>
                    <li><i class="devicon-github-plain"></i> <span class="icon-text">Git/GitHub</span> </li>
                    <li><i class="devicon-nodejs-plain"></i> <span class="icon-text">Node (NPM)</span> </li>
                    <li><i class="devicon-atom-original"></i> <span class="icon-text">Electron</span>  </li>
                    <li><i class="devicon-angularjs-plain"></i> <span class="icon-text">Angular </span> </li>
                    <li><i class="devicon-react-original"></i> <span class="icon-text">React</span> </li>
                    <li><i class="devicon-bootstrap-plain"></i> <span class="icon-text">Bootstrap</span>   </li>
                    <li><i class="devicon-jquery-plain-wordmark"></i> <span class="icon-text">JQuery/JQuery UI </span> </li>
            
                </ul>
                
                <ul class="graphic acrylic-dark medium-high shadow fade-in">
                <h2>Graphic / UX&UI Design</h2>
                    <li><span class="icon-text">Adobe Photoshop </span> </li>
                    <li><span class="icon-text">Adobe Illustrator </span> </li>
                    <li><span class="icon-text">Adobe InDesign </span> </li>
                    <li></li>
                </ul>`;
            } else {
                content_container.innerHTML = `
                <h1>Skills</h1>
      
        

                <ul class="webdev acrylic medium-high shadow fade-in">
                <h2>Web Development</h2>
                    <li><i class="devicon-html5-plain"></i> <span class="icon-text">HTML</span>  </li>
                    <li><i class="devicon-css3-plain"></i> <span class="icon-text">CSS</span> </li>
                    <li><i class="devicon-javascript-plain"></i> <span class="icon-text">JavaScript (ES6) </span> </li>
                    <li><i class="devicon-gulp-plain"></i> <span class="icon-text">GULP</span> </li>
                    <li><i class="devicon-github-plain"></i> <span class="icon-text">Git/GitHub</span> </li>
                    <li><i class="devicon-nodejs-plain"></i> <span class="icon-text">Node (NPM)</span> </li>
                    <li><i class="devicon-atom-original"></i> <span class="icon-text">Electron</span>  </li>
                    <li><i class="devicon-angularjs-plain"></i> <span class="icon-text">Angular </span> </li>
                    <li><i class="devicon-react-original"></i> <span class="icon-text">React</span> </li>
                    <li><i class="devicon-bootstrap-plain"></i> <span class="icon-text">Bootstrap</span>   </li>
                    <li><i class="devicon-jquery-plain-wordmark"></i> <span class="icon-text">JQuery/JQuery UI </span> </li>
            
                </ul>
                
                <ul class="graphic acrylic medium-high shadow fade-in">
                <h2>Graphic / UX&UI Design</h2>
                    <li><span class="icon-text">Adobe Photoshop </span> </li>
                    <li><span class="icon-text">Adobe Illustrator </span> </li>
                    <li><span class="icon-text">Adobe InDesign </span> </li>
                    <li></li>
                </ul>`;
            }
    
        }
    
    
  







}