   // Fonction pour le menu burger
   function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

  // Fonction pour l'effet d'écriture automatique
  function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = function() {
    const titleElements = document.querySelectorAll('.timeline-content h3');
    const paragraphElements = document.querySelectorAll('.timeline-content p');

    // Appliquer l'effet d'écriture automatique sur les titres
    titleElements.forEach((element, index) => {
        const text = element.textContent;
        element.innerHTML = ''; // Vider le texte pour l'écrire lettre par lettre
        typeWriter(element, text, 100); // 100ms entre chaque lettre
    });

    // Appliquer l'effet d'écriture automatique sur les paragraphes
    paragraphElements.forEach((element, index) => {
        const text = element.textContent;
        element.innerHTML = ''; // Vider le texte pour l'écrire lettre par lettre
        setTimeout(() => {
            typeWriter(element, text, 50); // 120ms entre chaque lettre
        }, 500); // Délai de 800ms avant de commencer l'écriture du paragraphe
    });
};
// Fonction pour l'effet d'écriture automatique
function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = function() {
    const titleElements = document.querySelectorAll('.timeline-content h3');
    const paragraphElements = document.querySelectorAll('.timeline-content p');

    // Appliquer l'effet d'écriture automatique sur les titres
    titleElements.forEach((element, index) => {
        const text = element.textContent;
        element.innerHTML = ''; // Vider le texte pour l'écrire lettre par lettre
        typeWriter(element, text, 100); // 100ms entre chaque lettre
    });

    // Appliquer l'effet d'écriture automatique sur les paragraphes
    paragraphElements.forEach((element, index) => {
        const text = element.textContent;
        element.innerHTML = ''; // Vider le texte pour l'écrire lettre par lettre
        setTimeout(() => {
            typeWriter(element, text, 50); // 50ms entre chaque lettre
        }, 500); // Délai de 500ms avant de commencer l'écriture du paragraphe
    });
};
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("diapo");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Changer l'image toutes les 10 secondes
}

        
      