document.querySelector('#skills-btn').addEventListener('click',function(){
    if(bg.classList.contains("light-bg")){
    content_container.innerHTML=`
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
    else if(bg.classList.contains("dark-bg")){
        content_container.innerHTML=`
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
    }
    
    
    });