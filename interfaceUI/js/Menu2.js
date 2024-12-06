/*// Sélection des éléments
const titre = document.getElementById('titre');
const conButton = document.getElementById('con');
const vacButton = document.getElementById('vac');

// Texte par défaut
const defaultText = 'Etat et Control de chaque individu!';
const vacText = 'Planification et historique de vaccin!';

// Gestion des clics
conButton.addEventListener('click', () => {
    titre.innerText = defaultText;
});

vacButton.addEventListener('click', () => {
    titre.innerText = vacText;
});

// Sélection des éléments
const sections = document.querySelectorAll('section');

// Textes des sections
const sectionTitles = {
    etat: 'Etat et Control de chaque individu!',
    vaccin: 'Planification et historique de vaccin!'
};

// Fonction pour détecter la section visible
function updateTitleOnScroll() {
    let currentSection = '';

    // Parcourir toutes les sections
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Vérifier si la section est visible dans la fenêtre
        if (rect.bottom >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    // Mettre à jour le titre si une section est détectée
    if (currentSection && sectionTitles[currentSection]) {
        titre.innerText = sectionTitles[currentSection];
    }
}

// Écouter l'événement scroll
window.addEventListener('scroll', updateTitleOnScroll);

*/


// ========================
// Sélection des éléments
// ========================
const titre = document.getElementById('titre');
const conButton = document.getElementById('con');
const vacButton = document.getElementById('vac');
const sections = document.querySelectorAll('section');

// ========================
// Textes associés aux sections
// ========================
const sectionTitles = {
    etat: 'Etat et Control de chaque individu!',
    vaccin: 'Planification et historique de vaccin!'
};

// ========================
// Gestion des clics sur les boutons
// ========================
conButton.addEventListener('click', () => {
    // Met le titre à jour pour "Etat"
    titre.innerText = sectionTitles.etat;

    // Faire défiler vers la section "etat"
    document.getElementById('etat').scrollIntoView({ behavior: 'smooth' });
});

vacButton.addEventListener('click', () => {
    // Met le titre à jour pour "Vaccin"
    titre.innerText = sectionTitles.vaccin;

    // Faire défiler vers la section "vaccin"
    document.getElementById('vaccin').scrollIntoView({ behavior: 'smooth' });
});

// ========================
// Fonction pour détecter la section visible
// ========================
function updateTitleOnScroll() {
    let currentSection = '';

    // Parcourir toutes les sections pour vérifier laquelle est visible
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // Vérifier si la section est visible (au milieu de l'écran)
        if (rect.bottom >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    // Si une section est visible, met à jour le titre
    if (currentSection && sectionTitles[currentSection]) {
        titre.innerText = sectionTitles[currentSection];
    }
}

// ========================
// Écoute des événements
// ========================
window.addEventListener('scroll', updateTitleOnScroll);
