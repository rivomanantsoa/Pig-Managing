function updatePigCount(filteredPigs) {
    // Initialisation des compteurs
    let total = 0;
    let maleCount = 0;
    let femaleCount = 0;

    // Parcourir les cochons filtrés et compter
    filteredPigs.forEach(pig => {
        total++; // Total des cochons
        if (pig.genre === 'Male') {
            maleCount++; // Mâles
        } else if (pig.genre === 'Femelle') {
            femaleCount++; // Femelles
        }
    });

    // Cible l'élément où afficher les statistiques
    const statsContainer = document.querySelector('#pigStats');
    statsContainer.innerHTML = ''; // Réinitialise le contenu

    // Ajouter les mâles
    const maleDiv = document.createElement('div');
    maleDiv.classList.add('stat-item');
    maleDiv.textContent = `Mâles : ${maleCount}`;
    statsContainer.appendChild(maleDiv);

    // Ajouter les femelles
    const femaleDiv = document.createElement('div');
    femaleDiv.classList.add('stat-item');
    femaleDiv.textContent = `Femelles : ${femaleCount}`;
    statsContainer.appendChild(femaleDiv);

    // Ajouter le total
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('stat-item');
    totalDiv.textContent = `Total : ${total}`;
    statsContainer.appendChild(totalDiv);
}

function getVisiblePigs() {
    const pigCards = document.querySelectorAll('.pig-card');
    const visiblePigs = [];

    pigCards.forEach(card => {
        if (card.parentElement.style.display !== 'none') {
            const age = card.querySelector('.age').innerText.split(': ')[1];
            const poids = card.querySelector('.poids').innerText.split(': ')[1];
            const genre = card.querySelector('.genre').innerText.split(': ')[1];
            const race = card.querySelector('.race').innerText.split(': ')[1];
            const type = card.querySelector('.type').innerText.split(': ')[1];
            const specificite = card.querySelector('.specificite').innerText.split(': ')[1];

            visiblePigs.push({ age, poids, genre, race, type, specificite });
        }
    });

    return visiblePigs;
}

// Gestion de la recherche
document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const pigCards = document.querySelectorAll('.pig-card');

    pigCards.forEach(card => {
        const age = card.querySelector('.age').innerText.toLowerCase();
        const poids = card.querySelector('.poids').innerText.toLowerCase();
        const genre = card.querySelector('.genre').innerText.toLowerCase();
        const race = card.querySelector('.race').innerText.toLowerCase();
        const type = card.querySelector('.type').innerText.toLowerCase();
        const specificite = card.querySelector('.specificite').innerText.toLowerCase();

        // Vérifier si le texte saisi correspond à une des caractéristiques
        if (
            age.includes(filter) ||
            poids.includes(filter) ||
            genre.includes(filter) ||
            race.includes(filter) ||
            type.includes(filter) ||
            specificite.includes(filter)
        ) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });

    // Mettre à jour les statistiques après le filtrage
    const visiblePigs = getVisiblePigs();
    updatePigCount(visiblePigs);
});

// Initialisation des statistiques au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    const allPigs = getVisiblePigs();
    updatePigCount(allPigs);
});



/***** deuxieme partie de notre code */


function updatePigCount(filteredPigs) {
    let total = 0;
    let maleCount = 0;
    let femaleCount = 0;

    filteredPigs.forEach(pig => {
        total++;
        if (pig.genre === 'Male') {
            maleCount++;
        } else if (pig.genre === 'Femelle') {
            femaleCount++;
        }
    });

    const statsContainer = document.querySelector('#pigStats');
    statsContainer.innerHTML = '';

    const maleDiv = document.createElement('div');
    maleDiv.classList.add('stat-item');
    maleDiv.textContent = `Mâles : ${maleCount}`;
    statsContainer.appendChild(maleDiv);

    const femaleDiv = document.createElement('div');
    femaleDiv.classList.add('stat-item');
    femaleDiv.textContent = `Femelles : ${femaleCount}`;
    statsContainer.appendChild(femaleDiv);

    const totalDiv = document.createElement('div');
    totalDiv.classList.add('stat-item');
    totalDiv.textContent = `Total : ${total}`;
    statsContainer.appendChild(totalDiv);
}

function getVisiblePigs() {
    const pigCards = document.querySelectorAll('.pig-card');
    const visiblePigs = [];

    pigCards.forEach(card => {
        if (card.parentElement.style.display !== 'none') {
            const age = card.querySelector('.age').innerText.split(': ')[1];
            const poids = card.querySelector('.poids').innerText.split(': ')[1];
            const genre = card.querySelector('.genre').innerText.split(': ')[1];
            const race = card.querySelector('.race').innerText.split(': ')[1];
            const type = card.querySelector('.type').innerText.split(': ')[1];
            const specificite = card.querySelector('.specificite').innerText.split(': ')[1];

            visiblePigs.push({ age, poids, genre, race, type, specificite });
        }
    });

    return visiblePigs;
}

function updateSelectOptions(filteredPigs) {
    const options = {
        age: new Set(),
        poids: new Set(),
        genre: new Set(),
        race: new Set(),
        type: new Set(),
        specificite: new Set(),
    };

    filteredPigs.forEach(pig => {
        if (pig.age) options.age.add(pig.age);
        if (pig.poids) options.poids.add(pig.poids);
        if (pig.genre) options.genre.add(pig.genre);
        if (pig.race) options.race.add(pig.race);
        if (pig.type) options.type.add(pig.type);
        if (pig.specificite) options.specificite.add(pig.specificite);
    });

    updateSelect('#SelectedAge', options.age);
    updateSelect('#SelectedPoids', options.poids);
    updateSelect('#SelectedGenre', options.genre);
    updateSelect('#SelectedRace', options.race);
    updateSelect('#SelectedType', options.type);
    updateSelect('#SelectedSpecificite', options.specificite);
}

function updateSelect(selectId, options) {
    const select = document.querySelector(selectId);
    const currentValue = select.value;

    select.innerHTML = '<option value="">Choisir...</option>';
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });

    if (options.has(currentValue)) {
        select.value = currentValue;
    }
}

document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const pigCards = document.querySelectorAll('.pig-card');

    pigCards.forEach(card => {
        const age = card.querySelector('.age').innerText.toLowerCase();
        const poids = card.querySelector('.poids').innerText.toLowerCase();
        const genre = card.querySelector('.genre').innerText.toLowerCase();
        const race = card.querySelector('.race').innerText.toLowerCase();
        const type = card.querySelector('.type').innerText.toLowerCase();
        const specificite = card.querySelector('.specificite').innerText.toLowerCase();

        if (
            age.includes(filter) ||
            poids.includes(filter) ||
            genre.includes(filter) ||
            race.includes(filter) ||
            type.includes(filter) ||
            specificite.includes(filter)
        ) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });

    const visiblePigs = getVisiblePigs();
    updatePigCount(visiblePigs);
    updateSelectOptions(visiblePigs);
});

document.addEventListener('DOMContentLoaded', function () {
    const allPigs = getVisiblePigs();
    updatePigCount(allPigs);
    updateSelectOptions(allPigs);
});
