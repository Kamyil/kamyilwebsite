let textMeBtn = document.querySelector('#text-me-btn');
textMeBtn.addEventListener('click',callTextMe);



function callTextMe(){
   
            screenWidth = window.innerWidth;
        
        
            if (screenWidth < 1000) {
        
                if (bg.classList.contains("dark-bg")) {
                    left_container.innerHTML = `
                <div class="back"><- Click this text to go Back</div><h1 class="textMe-title">Text me</h1>
                <div class="text-me acrylic-dark medium-high shadow fade-in">
                <form action="https://formspree.io/your@email.com"
                method="POST">
                <label>Name</label> <br>
                <input type="text" name="name" class="shadow"/> <br> <br>
                <label>E-mail</label> <br>
                <input type="email" name="_replyto" class="shadow"/> <br> <br>
                <label>Message</label> <br>
                <textarea name="message" class="shadow"></textarea> <br>
                <input type="hidden" name="_next" value="success.html" />
                
                <!-- <div class="g-recaptcha" data-sitekey="6LdeMlcUAAAAAGkI5tS0wQldmqp_J4CDONTKZnXw"></div> -->
                <input type="submit" value="Send" />
            </form>
                </div>`;
                } else {
                    left_container.innerHTML = `
                <div class="back"><- Click this text to go Back</div> <h1 class="textMe-title">Text me</h1>
                <div class="text-me acrylic medium-high shadow fade-in">
                <form action="https://formspree.io/your@email.com"
                method="POST">
                <label>Name</label> <br>
                <input type="text" name="name" class="shadow"/> <br> <br>
                <label>E-mail</label> <br>
                <input type="email" name="_replyto" class="shadow"/> <br> <br>
                <label>Message</label> <br>
                <textarea name="message" class="shadow"></textarea> <br>
                <input type="hidden" name="_next" value="success.html" />
                
                <!-- <div class="g-recaptcha" data-sitekey="6LdeMlcUAAAAAGkI5tS0wQldmqp_J4CDONTKZnXw"></div> -->
                <input type="submit" value="Send" />
            </form>
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
                    <h1>Text me</h1>
        <div class="text-me acrylic-dark medium-high shadow fade-in">
        <form action="https://formspree.io/your@email.com"
        method="POST">
        <label>Name</label> <br>
        <input type="text" name="name" class="shadow"/> <br> <br>
        <label>E-mail</label> <br>
        <input type="email" name="_replyto" class="shadow"/> <br> <br>
        <label>Message</label> <br>
        <textarea name="message" class="shadow"></textarea> <br>
        <input type="hidden" name="_next" value="success.html" />
        
        <!-- <div class="g-recaptcha" data-sitekey="6LdeMlcUAAAAAGkI5tS0wQldmqp_J4CDONTKZnXw"></div> -->
        <input type="submit" value="Send" />
    </form>
        </div>`;
                } else {
                    content_container.innerHTML = `
                    <h1>Text me</h1>
                    <div class="text-me acrylic medium-high shadow fade-in">
                    <form action="https://formspree.io/your@email.com"
                    method="POST">
                    <label>Name</label> <br>
                    <input type="text" name="name" class="shadow"/> <br> <br>
                    <label>E-mail</label> <br>
                    <input type="email" name="_replyto" class="shadow"/> <br> <br>
                    <label>Message</label> <br>
                    <textarea name="message" class="shadow"></textarea> <br>
                    <input type="hidden" name="_next" value="success.html" />
                    
                    <!-- <div class="g-recaptcha" data-sitekey="6LdeMlcUAAAAAGkI5tS0wQldmqp_J4CDONTKZnXw"></div> -->
                    <input type="submit" value="Send" />
                </form>
                    </div>`;
                }
        
            }
        
        
      
    
    
    
    
    
    
    
    }
    
    


    