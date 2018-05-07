const content_container = document.querySelector('#right-bar-container');
document.querySelector('#bio-btn').addEventListener('click',function(){


    if(bg.classList.contains("dark-bg")){
        content_container.innerHTML=`
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
    }
    else{
        content_container.innerHTML=`
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




});