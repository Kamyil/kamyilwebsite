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
        <p>Informatyką i mediami interesuje się od wczesnego dzieciństwa. 
            Jako nastolatek lubiłem modować gry, przerabiać tekstury, tworzyć grafiki i filmy oraz 
            upiększać programy i systemy operacyjne. Ukończyłem Technikum w Sosnowcu i zdobyłem kwalifikację 
            Fototechnika, który pozwala mi na wykonywanie zawodu w dziedzinie Fotografii, grafiki oraz 
            projektowania prostych stron WWW. Jednak było to dla mnie za mało. Kiedy mogłoby się wydawać, 
            że artystyczne kierunki gdzie dominuje abstrakcyjny typ myślenia nie mogą iść w parze z 
            programowaniem wymagającym logicznego rozumowania - stwierdziłem, że postaram się je złączyć razem. 
            W ten oto sposób zostałem front-end developerem, który z pasją tworzy strony i aplikacje zawierające 
            interfejsy piękne a zarazem w pełni funkcjonalne. Chcąc zamienić swoją pracę w możliwość zarobku, 
            zacząłem od filmowania meczów Zagłębia Sosnowiec dla firmy InStat Football, a później tworzyłem w 
            ramach pojedynczych zleceń grafiki, zdjęcia i aplikacje internetowe dla różnych firm jako freelancer. 
            Owoce mojej pracy możesz zobaczyć w zakładce “Projekty”. Prócz mojej artystyczno-programistycznej 
            działalności, interesuję się również rozwojem osobistym dlatego każdego dnia, staram się poświęcić 
            czas na rozwój umiejętności miękkich tj. zarządzanie czasem, panowanie nad emocjami, praca w zespole 
            czy strategiczne myślenie. Obecnie poszukuje nowych wyzwań, dlatego mogę podjąć pracę stacjonarną w 
            Sosnowcu, Bedzinie, Katowicach i Dąbrowie Górniczej lub zdalnie. Jeżeli jesteś zainteresowany 
            współpracą ze mną, możesz do mnie napisać klikając w zakładkę “Napisz do mnie” lub na adres: 
            kkbugajak@gmail.com  :) </p>
        </div>`;
        } else {
            left_container.innerHTML = `
        <div class="back"><- Click this text to go Back</div> <h1 class="bio-title">Bio</h1>
        <div class="bio-content acrylic medium-high shadow fade-in">
        <p>Informatyką i mediami interesuje się od wczesnego dzieciństwa. 
            Jako nastolatek lubiłem modować gry, przerabiać tekstury, tworzyć grafiki i filmy oraz 
            upiększać programy i systemy operacyjne. Ukończyłem Technikum w Sosnowcu i zdobyłem kwalifikację 
            Fototechnika, który pozwala mi na wykonywanie zawodu w dziedzinie Fotografii, grafiki oraz 
            projektowania prostych stron WWW. Jednak było to dla mnie za mało. Kiedy mogłoby się wydawać, 
            że artystyczne kierunki gdzie dominuje abstrakcyjny typ myślenia nie mogą iść w parze z 
            programowaniem wymagającym logicznego rozumowania - stwierdziłem, że postaram się je złączyć razem. 
            W ten oto sposób zostałem front-end developerem, który z pasją tworzy strony i aplikacje zawierające 
            interfejsy piękne a zarazem w pełni funkcjonalne. Chcąc zamienić swoją pracę w możliwość zarobku, 
            zacząłem od filmowania meczów Zagłębia Sosnowiec dla firmy InStat Football, a później tworzyłem w 
            ramach pojedynczych zleceń grafiki, zdjęcia i aplikacje internetowe dla różnych firm jako freelancer. 
            Owoce mojej pracy możesz zobaczyć w zakładce “Projekty”. Prócz mojej artystyczno-programistycznej 
            działalności, interesuję się również rozwojem osobistym dlatego każdego dnia, staram się poświęcić 
            czas na rozwój umiejętności miękkich tj. zarządzanie czasem, panowanie nad emocjami, praca w zespole 
            czy strategiczne myślenie. Obecnie poszukuje nowych wyzwań, dlatego mogę podjąć pracę stacjonarną w 
            Sosnowcu, Bedzinie, Katowicach i Dąbrowie Górniczej lub zdalnie. Jeżeli jesteś zainteresowany 
            współpracą ze mną, możesz do mnie napisać klikając w zakładkę “Napisz do mnie” lub na adres: 
            kkbugajak@gmail.com  :) </p>
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
        <p>Informatyką i mediami interesuje się od wczesnego dzieciństwa. 
            Jako nastolatek lubiłem modować gry, przerabiać tekstury, tworzyć grafiki i filmy oraz 
            upiększać programy i systemy operacyjne. Ukończyłem Technikum w Sosnowcu i zdobyłem kwalifikację 
            Fototechnika, który pozwala mi na wykonywanie zawodu w dziedzinie Fotografii, grafiki oraz 
            projektowania prostych stron WWW. Jednak było to dla mnie za mało. Kiedy mogłoby się wydawać, 
            że artystyczne kierunki gdzie dominuje abstrakcyjny typ myślenia nie mogą iść w parze z 
            programowaniem wymagającym logicznego rozumowania - stwierdziłem, że postaram się je złączyć razem. 
            W ten oto sposób zostałem front-end developerem, który z pasją tworzy strony i aplikacje zawierające 
            interfejsy piękne a zarazem w pełni funkcjonalne. Chcąc zamienić swoją pracę w możliwość zarobku, 
            zacząłem od filmowania meczów Zagłębia Sosnowiec dla firmy InStat Football, a później tworzyłem w 
            ramach pojedynczych zleceń grafiki, zdjęcia i aplikacje internetowe dla różnych firm jako freelancer. 
            Owoce mojej pracy możesz zobaczyć w zakładce “Projekty”. Prócz mojej artystyczno-programistycznej 
            działalności, interesuję się również rozwojem osobistym dlatego każdego dnia, staram się poświęcić 
            czas na rozwój umiejętności miękkich tj. zarządzanie czasem, panowanie nad emocjami, praca w zespole 
            czy strategiczne myślenie. Obecnie poszukuje nowych wyzwań, dlatego mogę podjąć pracę stacjonarną w 
            Sosnowcu, Bedzinie, Katowicach i Dąbrowie Górniczej lub zdalnie. Jeżeli jesteś zainteresowany 
            współpracą ze mną, możesz do mnie napisać klikając w zakładkę “Napisz do mnie” lub na adres: 
            kkbugajak@gmail.com  :) </p>
        </div>`;
        } else {
            content_container.innerHTML = `
        <h1>Bio</h1>
        <div class="bio-content acrylic medium-high shadow fade-in">
        <p>Informatyką i mediami interesuje się od wczesnego dzieciństwa. 
            Jako nastolatek lubiłem modować gry, przerabiać tekstury, tworzyć grafiki i filmy oraz 
            upiększać programy i systemy operacyjne. Ukończyłem Technikum w Sosnowcu i zdobyłem kwalifikację 
            Fototechnika, który pozwala mi na wykonywanie zawodu w dziedzinie Fotografii, grafiki oraz 
            projektowania prostych stron WWW. Jednak było to dla mnie za mało. Kiedy mogłoby się wydawać, 
            że artystyczne kierunki gdzie dominuje abstrakcyjny typ myślenia nie mogą iść w parze z 
            programowaniem wymagającym logicznego rozumowania - stwierdziłem, że postaram się je złączyć razem. 
            W ten oto sposób zostałem front-end developerem, który z pasją tworzy strony i aplikacje zawierające 
            interfejsy piękne a zarazem w pełni funkcjonalne. Chcąc zamienić swoją pracę w możliwość zarobku, 
            zacząłem od filmowania meczów Zagłębia Sosnowiec dla firmy InStat Football, a później tworzyłem w 
            ramach pojedynczych zleceń grafiki, zdjęcia i aplikacje internetowe dla różnych firm jako freelancer. 
            Owoce mojej pracy możesz zobaczyć w zakładce “Projekty”. Prócz mojej artystyczno-programistycznej 
            działalności, interesuję się również rozwojem osobistym dlatego każdego dnia, staram się poświęcić 
            czas na rozwój umiejętności miękkich tj. zarządzanie czasem, panowanie nad emocjami, praca w zespole 
            czy strategiczne myślenie. Obecnie poszukuje nowych wyzwań, dlatego mogę podjąć pracę stacjonarną w 
            Sosnowcu, Bedzinie, Katowicach i Dąbrowie Górniczej lub zdalnie. Jeżeli jesteś zainteresowany 
            współpracą ze mną, możesz do mnie napisać klikając w zakładkę “Napisz do mnie” lub na adres: 
            kkbugajak@gmail.com  :) </p>
        </div>`;
        }

    }


};