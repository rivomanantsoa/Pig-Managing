/*********** Mode filtrage de cochon */
/*document.addEventListener('DOMContentLoaded', () => {
    // Appeler la fonction pour générer les options après chargement de la page
    generateOptions();

    // Ajouter l'événement 'change' sur tous les selects pour filtrer dynamiquement
    document.querySelectorAll('#SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedRace, #SelectedType, #SelectedSpecificite')
        .forEach(select => select.addEventListener('change', filterPigs));

    // Ajouter l'événement 'change' pour réinitialiser les filtres dépendants
    document.querySelectorAll('#SelectedRace, #SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedType, #SelectedSpecificite')
        .forEach(select => {
            select.addEventListener('change', (event) => {
                resetDependentFilters(event.target.id); // Réinitialiser les filtres dépendants
                filterPigs(); // Appliquer le filtre
            });
        });
});

// Fonction pour générer les options dans les listes déroulantes
function generateOptions() {
    const pigCards = document.querySelectorAll('.pig-card'); // Sélectionner toutes les cartes cochons
    const options = {
        age: new Set(),
        poids: new Set(),
        genre: new Set(),
        race: new Set(),
        type: new Set(),
        specificite: new Set(),
    };

    pigCards.forEach(card => {
        const age = card.querySelector('#age')?.innerText.split(': ')[1];
        const poids = card.querySelector('#poids')?.innerText.split(': ')[1];
        const genre = card.querySelector('#genre')?.innerText.split(': ')[1];
        const race = card.querySelector('#race')?.innerText.split(': ')[1];
        const type = card.querySelector('#type')?.innerText.split(': ')[1];
        const specificite = card.querySelector('#specificite')?.innerText.split(': ')[1];

        if (age) options.age.add(age);
        if (poids) options.poids.add(poids);
        if (genre) options.genre.add(genre);
        if (race) options.race.add(race);
        if (type) options.type.add(type);
        if (specificite) options.specificite.add(specificite);
    });

    addOptionsToSelect('#SelectedAge', options.age);
    addOptionsToSelect('#SelectedPoids', options.poids);
    addOptionsToSelect('#SelectedGenre', options.genre);
    addOptionsToSelect('#SelectedRace', options.race);
    addOptionsToSelect('#SelectedType', options.type);
    addOptionsToSelect('#SelectedSpecificite', options.specificite);
}

// Ajouter les options collectées aux menus déroulants
function addOptionsToSelect(selectId, options) {
    const select = document.querySelector(selectId);
    select.innerHTML = '<option selected disabled>Choisir...</option>'; // Réinitialiser et ajouter une option par défaut
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}



// Ajouter un événement 'click' au bouton d'actualisation
document.querySelector('.button').addEventListener('click', resetFilters);

// Fonction pour filtrer les cochons
function filterPigs() {
    const selectedAge = document.querySelector('#SelectedAge').value;
    const selectedPoids = document.querySelector('#SelectedPoids').value;
    const selectedGenre = document.querySelector('#SelectedGenre').value;
    const selectedRace = document.querySelector('#SelectedRace').value;
    const selectedType = document.querySelector('#SelectedType').value;
    const selectedSpecificite = document.querySelector('#SelectedSpecificite').value;

    const pigCards = document.querySelectorAll('.pig-card');

    pigCards.forEach(card => {
        const age = card.querySelector('#age')?.innerText.split(': ')[1];
        const poids = card.querySelector('#poids')?.innerText.split(': ')[1];
        const genre = card.querySelector('#genre')?.innerText.split(': ')[1];
        const race = card.querySelector('#race')?.innerText.split(': ')[1];
        const type = card.querySelector('#type')?.innerText.split(': ')[1];
        const specificite = card.querySelector('#specificite')?.innerText.split(': ')[1];

        if (
            (!selectedAge || age === selectedAge) &&
            (!selectedPoids || poids === selectedPoids) &&
            (!selectedGenre || genre === selectedGenre) &&
            (!selectedRace || race === selectedRace) &&
            (!selectedType || type === selectedType) &&
            (!selectedSpecificite || specificite === selectedSpecificite)
        ) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Fonction pour réinitialiser les filtres dépendants
function resetDependentFilters(changedFilterId) {
    const filtersToReset = {
        SelectedRace: ['#SelectedAge', '#SelectedPoids', '#SelectedGenre', '#SelectedType', '#SelectedSpecificite'],
        SelectedAge: ['#SelectedPoids', '#SelectedGenre', '#SelectedType', '#SelectedSpecificite'],
        // Ajouter d'autres dépendances ici si nécessaire
    };

    if (filtersToReset[changedFilterId]) {
        filtersToReset[changedFilterId].forEach(filterId => {
            const filter = document.querySelector(filterId);
            if (filter) filter.value = ""; // Réinitialiser
        });
    }
}
// Fonction pour réinitialiser les filtres
function resetFilters() {
    // Réinitialiser toutes les listes déroulantes
    document.querySelectorAll('#SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedRace, #SelectedType, #SelectedSpecificite')
        .forEach(select => {
            select.value = ""; // Réinitialiser la sélection
        });

    // Réafficher toutes les cartes de cochons
    const pigCards = document.querySelectorAll('.pig-card');
    pigCards.forEach(card => {
        card.parentElement.style.display = 'block'; // Réafficher toutes les cartes
    });
}




/*** total de nombre de cochon */

/* version simplifier du filtre*/


/*nombre de cochon
function updatePigCount() {
    const pigCards = document.querySelectorAll('.pig-card'); // Sélectionner toutes les cartes de cochons
    let total = 0;
    let maleCount = 0;
    let femaleCount = 0;

    // Parcourir chaque carte pour compter les cochons
    pigCards.forEach(card => {
        total++; // Incrémenter le total général
        const genre = card.querySelector('.genre')?.innerText.split(': ')[1]; // Trouver le genre
        if (genre === 'Male') {
            maleCount++;
        } else if (genre === 'Femelle') {
            femaleCount++;
        }
    });

    const statsContainer = document.querySelector('#pigStats');
    statsContainer.innerHTML = ''; // Réinitialise le contenu

    // Ajouter le total
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('stat-item');
    totalDiv.textContent = `Total : ${total}`;
    statsContainer.appendChild(totalDiv);

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

    
}

// Mettre à jour les totaux après le chargement de la page
document.addEventListener('DOMContentLoaded', updatePigCount);





//// // Fonction pour générer les options dynamiques
 /*function generateOptions() {
    const pigCards = document.querySelectorAll('.pig-card'); // Sélectionner tous les cochons
    const options = {
        age: new Set(),
        poids: new Set(),
        genre: new Set(),
        race: new Set(),
        type: new Set(),
        specificite: new Set(),
    };

    // Parcourir chaque carte de cochon et collecter les données
    pigCards.forEach(card => {
        const age = card.querySelector('#age')?.innerText.split(': ')[1];
        const poids = card.querySelector('#poids')?.innerText.split(': ')[1];
        const genre = card.querySelector('#genre')?.innerText.split(': ')[1];
        const race = card.querySelector('#race')?.innerText.split(': ')[1];
        const type = card.querySelector('#type')?.innerText.split(': ')[1]; // Si le type existe
        const specificite = card.querySelector('#specificite')?.innerText.split(': ')[1];

        if (age) options.age.add(age);
        if (poids) options.poids.add(poids);
        if (genre) options.genre.add(genre);
        if (race) options.race.add(race);
        if (type) options.type.add(type);
        if (specificite) options.specificite.add(specificite);
        

    });

    // Ajouter les options collectées aux menus déroulants
    addOptionsToSelect('#SelectedAge', options.age);
    addOptionsToSelect('#SelectedPoids', options.poids);
    addOptionsToSelect('#SelectedGenre', options.genre);
    addOptionsToSelect('#SelectedRace', options.race);
    addOptionsToSelect('#SelectedType', options.type);
    addOptionsToSelect('#SelectedSpecificite', options.specificite);
}

// Fonction pour ajouter des options à un menu déroulant
function addOptionsToSelect(selectId, options) {
    const select = document.querySelector(selectId);
    select.innerHTML = ''; // Réinitialiser les options
    select.innerHTML = '<option selected disabled>Choisir...</option>'; // Option par défaut

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

// Appeler la fonction après le chargement de la page
document.addEventListener('DOMContentLoaded', generateOptions);

///filatrage

function filterPigs() {
    const selectedAge = document.querySelector('#SelectedAge').value;
    const selectedPoids = document.querySelector('#SelectedPoids').value;
    const selectedGenre = document.querySelector('#SelectedGenre').value;
    const selectedRace = document.querySelector('#SelectedRace').value;
    const selectedType = document.querySelector('#SelectedType').value;
    const selectedSpecificite = document.querySelector('#SelectedSpecificite').value;

    pigCards.forEach(card => {
        const age = card.querySelector('#age')?.innerText.split(': ')[1];
        const poids = card.querySelector('#poids')?.innerText.split(': ')[1];
        const genre = card.querySelector('#genre')?.innerText.split(': ')[1];
        const race = card.querySelector('#race')?.innerText.split(': ')[1];
        const type = card.querySelector('#type')?.innerText.split(': ')[1];
        const specificite = card.querySelector('#specificite')?.innerText.split(': ')[1];

        // Appliquer le filtre
        if (
            (!selectedAge || age === selectedAge) &&
            (!selectedPoids || poids === selectedPoids) &&
            (!selectedGenre || genre === selectedGenre) &&
            (!selectedRace || race === selectedRace) &&
            (!selectedType || type === selectedType) &&
            (!selectedSpecificite || specificite === selectedSpecificite)
        ) {
            card.parentElement.style.display = 'block'; // Afficher
        } else {
            card.parentElement.style.display = 'none'; // Masquer
        }
    });
}


// Bouton pour appliquer le filtre
document.querySelector('#filterButton').addEventListener('click', filterPigs);*/



/*** filtre */

/*function updatePigVisibility(filteredPigs) {
    const pigData = getPigData();
    let hasVisible = false;

    // Filtrer les cochons
    pigData.forEach(pig => {
        const visible = filteredPigs.some(filteredPig => {
            return Object.keys(filteredPig).every(key => {
                return filteredPig[key] === pig[key];
            });
        });

        // Utilisation de la classe d-none pour afficher/masquer les cochons
        if (visible) {
            pig.element.classList.remove('d-none');
        } else {
            pig.element.classList.add('d-none');
        }

        hasVisible = hasVisible || visible;
    });

    // Réorganiser les cochons visibles dans le conteneur sans laisser de vide
    const pigContainer = document.querySelector('#pig-container');
    const visiblePigs = Array.from(pigData)
        .filter(pig => !pig.element.classList.contains('d-none'))
        .map(pig => pig.element);

    // Vide le conteneur avant de le réorganiser
    pigContainer.innerHTML = '';

    // Ajouter les cochons visibles dans le conteneur de manière continue
    visiblePigs.forEach(pig => {
        pigContainer.appendChild(pig);
    });

    // Masquer les colonnes vides
    const columns = document.querySelectorAll('.pig-column');
    columns.forEach(column => {
        const isVisible = Array.from(column.children).some(child => {
            return !child.classList.contains('d-none');
        });

        column.classList.toggle('d-none', !isVisible);
    });

    // Afficher/masquer le message si aucun résultat
    const noResultsMessage = document.querySelector('#no-results');
    if (!hasVisible) {
        noResultsMessage.classList.remove('d-none');
    } else {
        noResultsMessage.classList.add('d-none');
    }
}*/

/*function updatePigVisibility(filteredPigs) {
    const pigData = getPigData();
    let hasVisible = false;

    pigData.forEach(pig => {
        const visible = filteredPigs.some(filteredPig => {
            return Object.keys(filteredPig).every(key => {
                return filteredPig[key] === pig[key];
            });
        });
        pig.element.style.display = visible ? 'block' : 'none';
        hasVisible = hasVisible || visible;
    });

    const noResultsMessage = document.querySelector('#no-results');
    if (!hasVisible) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
}*/

// Mettre à jour la visibilité des cartes de cochons
/*function updatePigVisibility(filteredPigs) {
    const pigData = getPigData();
    let hasVisible = false;

    pigData.forEach(pig => {
        const visible = filteredPigs.includes(pig);
        pig.element.style.display = visible ? 'block' : 'none';
        hasVisible = hasVisible || visible;
    });

    const noResultsMessage = document.querySelector('#no-results');
    if (!hasVisible) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
}*/

/*
document.addEventListener('DOMContentLoaded', () => {
    generateOptions();

    document.querySelectorAll('#SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedRace, #SelectedType, #SelectedSpecificite')
        .forEach(select => {
            select.addEventListener('change', (event) => {
                resetDependentFilters(event.target.id);
                filterPigs();
            });
        });
});

function generateOptions() {
    const pigCards = document.querySelectorAll('.pig-card');
    const keys = ['age', 'poids', 'genre', 'race', 'type', 'specificite'];
    const options = {};

    keys.forEach(key => options[key] = new Set());

    pigCards.forEach(card => {
        keys.forEach(key => {
            const value = card.querySelector(`#${key}`)?.innerText.split(': ')[1];
            if (value) options[key].add(value);
        });
    });

    keys.forEach(key => addOptionsToSelect(`#Selected${key.charAt(0).toUpperCase() + key.slice(1)}`, options[key]));
}

function addOptionsToSelect(selectId, options) {
    const select = document.querySelector(selectId);
    select.innerHTML = '<option selected disabled>Choisir...</option>';
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

function filterPigs() {
    const selectedValues = {
        age: document.querySelector('#SelectedAge')?.value,
        poids: document.querySelector('#SelectedPoids')?.value,
        genre: document.querySelector('#SelectedGenre')?.value,
        race: document.querySelector('#SelectedRace')?.value,
        type: document.querySelector('#SelectedType')?.value,
        specificite: document.querySelector('#SelectedSpecificite')?.value,
    };

    document.querySelectorAll('.pig-card').forEach(card => {
        const cardValues = {
            age: card.querySelector('.age')?.innerText.split(': ')[1],
            poids: card.querySelector('.poids')?.innerText.split(': ')[1],
            genre: card.querySelector('.genre')?.innerText.split(': ')[1],
            race: card.querySelector('.race')?.innerText.split(': ')[1],
            type: card.querySelector('.type')?.innerText.split(': ')[1],
            specificite: card.querySelector('.specificite')?.innerText.split(': ')[1],
        };

        const isVisible = Object.keys(selectedValues).every(key =>
            !selectedValues[key] || selectedValues[key] === cardValues[key]
        );

        card.parentElement.style.display = isVisible ? 'block' : 'none';
    });
}

function resetDependentFilters(changedFilterId) {
    const filters = ['#SelectedAge', '#SelectedPoids', '#SelectedGenre', '#SelectedRace', '#SelectedType', '#SelectedSpecificite'];
    let reset = false;

    filters.forEach(filterId => {
        if (reset) document.querySelector(filterId).value = "";
        if (filterId.slice(1) === changedFilterId) reset = true;
    });
}

function resetFilters() {
    document.querySelectorAll('#SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedRace, #SelectedType, #SelectedSpecificite')
        .forEach(select => select.value = "");

    document.querySelectorAll('.pig-card').forEach(card => {
        card.parentElement.style.display = 'block';
    });
}

document.querySelector('.button').addEventListener('click', resetFilters);

*/