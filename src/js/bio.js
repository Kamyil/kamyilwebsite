const content_container = document.querySelector('#right-bar-container');
let bioBtn = document.querySelector('#bio-btn');
bioBtn.addEventListener('click', callBio);


function callBio() {
    screenWidth = window.innerWidth;


    if (screenWidth < 1000) {

        if (bg.classList.contains("dark-bg")) {
            left_container.innerHTML = `
        <div class="back"><- Click this text to go Back</div>  <h1 class="bio-title">Bio</h1>
        <div class="bio-content acrylic-dark medium-high shadow fade-in">
        <p>IT and media had been my passion since i was very young. As a teenager i loved modding video games, making graphics/films and making OSs more beautiful. I finished Technic High School, obtaining the Photo and Media engineer title in the same time, which allows me to work with media projects such as Graphic&UX&UI Designing, making professional photos and creating web apps. I do my work with huge determination, passion and positive attitude. I appreciate working with team. My main and representative advantages are innovative way of creating interfaces and well-educated soft skills. If you want to text me a message, you can do that by e-mail: kkbugajak@gmail.com or by “Text Me” section :)     </p>
        </div>`;
        } else {
            left_container.innerHTML = `
        <div class="back"><- Click this text to go Back</div> <h1 class="bio-title">Bio</h1>
        <div class="bio-content acrylic medium-high shadow fade-in">
        <p>IT and media had been my passion since i was very young. As a teenager i loved modding video games, making graphics/films and making OSs more beautiful. I finished Technic High School, obtaining the Photo and Media engineer title in the same time, which allows me to work with media projects such as Graphic&UX&UI Designing, making professional photos and creating web apps. I do my work with huge determination, passion and positive attitude. I appreciate working with team. My main and representative advantages are innovative way of creating interfaces and well-educated soft skills. If you want to text me a message, you can do that by e-mail: kkbugajak@gmail.com or by “Text Me” section :)    </p>
        </div>`;

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
        <h1>Bio</h1>
        <div class="bio-content acrylic-dark medium-high shadow fade-in">
        <p>IT and media had been my passion since i was very young. As a teenager i loved modding video games, making graphics/films and making OSs more beautiful. I finished Technic High School, obtaining the Photo and Media engineer title in the same time, which allows me to work with media projects such as Graphic&UX&UI Designing, making professional photos and creating web apps. I do my work with huge determination, passion and positive attitude. I appreciate working with team. My main and representative advantages are innovative way of creating interfaces and well-educated soft skills. If you want to text me a message, you can do that by e-mail: kkbugajak@gmail.com or by “Text Me” section :)    </p>
        </div>`;
        } else {
            content_container.innerHTML = `
        <h1>Bio</h1>
        <div class="bio-content acrylic medium-high shadow fade-in">
        <p>IT and media had been my passion since i was very young. As a teenager i loved modding video games, making graphics/films and making OSs more beautiful. I finished Technic High School, obtaining the Photo and Media engineer title in the same time, which allows me to work with media projects such as Graphic&UX&UI Designing, making professional photos and creating web apps. I do my work with huge determination, passion and positive attitude. I appreciate working with team. My main and representative advantages are innovative way of creating interfaces and well-educated soft skills. If you want to text me a message, you can do that by e-mail: kkbugajak@gmail.com or by “Text Me” section :)    </p>
        </div>`;
        }

    }


};