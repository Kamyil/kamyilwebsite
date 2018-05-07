document.querySelector('#projects-btn').addEventListener('click',function(){
    if(bg.classList.contains("light-bg")){
        content_container.innerHTML=`
    <h1>Projekty</h1>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="img/fotobrom-screen.png" class="shadow" alt=""></img>
    <h2>FotoBrom</h2>  
    <p>Oficjalna witryna zakładu fotograficznego w Sosnowcu. Wykonano głównie w Bootstrapie, ale dodałem tutaj też dużo
    własnych styli i skryptów.</p>
    </div>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="img/kamyilos.png" class="shadow" alt=""></img>
    <h2>KamyilOS</h2>  
    <p>Próba stworzenia mini systemu operacyjnego jako aplikacji internetowej. Dostępny jest w nim wiele pomniejszych aplikacji
    </p>

    </div>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="img/invo.png" class="shadow" alt=""></img>
    <h2>Invoker</h2>  
    <p>Symulator oraz jednoczesny trener jednej z najtrudniejszych postaci z gry Dota 2. 
    Razem z w pełni odwzorowanym interfejsem, gracze mogą potrenować swoje umiejętności tworzenia zaklęć. Prócz tego mogą
    zobaczyć statystyki Invokera, ustawić klawisze do ich własnych preferencji, kupić przedmioty oraz spróbować swoich sił 
    w Invoke Challenge.  </p>
    

    </div>

    <div class="project acrylic medium-high shadow fade-in-from-top">
    
    <img src="img/pomieszczeniometr.png" class="shadow" alt=""></img>
    <h2>Pomieszczeniometr</h2>  
    <p>Aplikacja wykonana dla firmy budowlanej w AngularzeJS i Electronie, służąca do pomiarów 
    pomieszczeń w czasie rzeczywistym. Dostępna jest jako responsywna
    strona internetowa oraz jako program na PC na systemy Windows, Mac i Linux </p>

    </div>
    `;
    }
   else if(bg.classList.contains("dark-bg")){
    content_container.innerHTML=`
    <h1>Projekty</h1>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="img/fotobrom-screen.png" class="shadow" alt=""></img>
    <h2>FotoBrom</h2>  
    <p>Oficjalna witryna zakładu fotograficznego w Sosnowcu. Wykonano głównie w Bootstrapie, ale dodałem tutaj też dużo
    własnych styli i skryptów.</p>
    </div>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="img/kamyilos.png" class="shadow" alt=""></img>
    <h2>KamyilOS</h2>  
    <p>Próba stworzenia mini systemu operacyjnego jako aplikacji internetowej. Dostępny jest w nim wiele pomniejszych aplikacji
    </p>

    </div>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="img/invo.png" class="shadow" alt=""></img>
    <h2>Invoker</h2>  
    <p>Symulator oraz jednoczesny trener jednej z najtrudniejszych postaci z gry Dota 2. 
    Razem z w pełni odwzorowanym interfejsem, gracze mogą potrenować swoje umiejętności tworzenia zaklęć. Prócz tego mogą
    zobaczyć statystyki Invokera, ustawić klawisze do ich własnych preferencji, kupić przedmioty oraz spróbować swoich sił 
    w Invoke Challenge.  </p>
    

    </div>

    <div class="project acrylic-dark medium-high shadow fade-in-from-top">
    
    <img src="img/pomieszczeniometr.png" class="shadow" alt=""></img>
    <h2>Pomieszczeniometr</h2>  
    <p>Aplikacja wykonana dla firmy budowlanej w AngularzeJS i Electronie, służąca do pomiarów 
    pomieszczeń w czasie rzeczywistym. Dostępna jest jako responsywna
    strona internetowa oraz jako program na PC na systemy Windows, Mac i Linux </p>

    </div>
    `;
    }

   
    });