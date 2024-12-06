function updateResultSummary(filteredPigs) {
    const total = filteredPigs.length;
    const males = filteredPigs.filter(pig => pig.genre === 'Male').length;
    const females = filteredPigs.filter(pig => pig.genre === 'Femelle').length;

    // Sélectionnez un élément pour afficher les résultats
    const resultSummary = document.querySelector('#result-summary');
    resultSummary.innerHTML = `
        <div>Total : ${total}</div>
        <div>Mâles : ${males}</div>
        <div>Femelles : ${females}</div>
    `;
    console.log("updateresulSummary/ afficahge des nombre pour les totaux *+* updateResultSummary(filteredPigs)");
}

document.addEventListener('DOMContentLoaded', () => {
   // generateOptions(); // Générer les options initiales
   setupEventListeners(); // Configurer les événements
    console.log("Evenent dans le loader en premier lieu//** document.addEventListener('DOMContentLoaded', ()");
});

// Fonction pour générer les options initiales
function generateOptions() {
  //  const pigCards = getPigData();
   // updateSelectOptions(pigCards);
}

// Configurer les événements
function setupEventListeners() {
    const selects = document.querySelectorAll('#SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedRace, #SelectedType, #SelectedSpecificite');

    selects.forEach(select => {
        select.addEventListener('change', (event) => {
            console.log(`Filter changed: ${event.target.id} - ${event.target.value}`);  // Debugging line
            const filteredPigs = applyFilters();
            updatePigVisibility(filteredPigs);
            updateResultSummary(filteredPigs);
            updatePigCount(filteredPigs);
            updateSelectOptions(filteredPigs);
        });
    });

    document.querySelector('.button').addEventListener('click', resetFilters);
    console.log("event listener misy boutton 3// am le manao filtrage **/ setupEventListeners()");
}


// Obtenir les données des cochons
function getPigData() {
    const pigCards = document.querySelectorAll('#pig-card');
    console.log("getpig date 4/ manao return contenu dans le pigs ex: nom prenom *-*-*  getPigData()");
    return Array.from(pigCards).map(card => ({
        element: card,
        age: card.querySelector('.age')?.innerText.split(': ')[1]?.trim(),
        poids: card.querySelector('.poids')?.innerText.split(': ')[1]?.trim(),
        genre: card.querySelector('.genre')?.innerText.split(': ')[1]?.trim(),
        race: card.querySelector('.race')?.innerText.split(': ')[1]?.trim(),
        type: card.querySelector('.type')?.innerText.split(': ')[1]?.trim(),
        specificite: card.querySelector('.specificite')?.innerText.split(': ')[1]?.trim(),
        imgSrc: card.querySelector('img')?.getAttribute('src')
    
    }
   
));

}


// Appliquer les filtres sélectionnés
function applyFilters() {
    const selectedFilters = {
        age: document.querySelector('#SelectedAge').value || null,
        poids: document.querySelector('#SelectedPoids').value || null,
        genre: document.querySelector('#SelectedGenre').value || null,
        race: document.querySelector('#SelectedRace').value || null,
        type: document.querySelector('#SelectedType').value || null,
        specificite: document.querySelector('#SelectedSpecificite').value || null,
    };
    console.log("apply filtre tete eto ambany eto le getpig data**********-*-*--*");
    const pigData = getPigData();
    console.log("get pig data dans le apply filtre imortant");
    const filteredPigs = pigData.filter(pig => {
        return Object.keys(selectedFilters).every(key => {
            return !selectedFilters[key] || pig[key] === selectedFilters[key];
        });
    });
    console.log("apply filtre back fin*-*--*-- applyFilters()");
    return filteredPigs;
    

}

function updatePigVisibility(filteredPigs) {
    console.log("updatepige visiblilite =<<font misy getPigData / updatePigVisibility(filteredPigs)");
    const pigData = getPigData();
    let hasVisible = false;

    // Mise à jour des cochons
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

}



// Mettre à jour les options des listes déroulantes
function updateSelectOptions(filteredPigs) {
    const options = {
        age: new Set(),
        poids: new Set(),
        genre: new Set(),
        race: new Set(),
        type: new Set(),
        specificite: new Set(),
    };
    //  options.age.add(innerHTML= '<option value="">Age...</option>');
    /*options.poids.add("Poids").value="";
    options.genre.add("Genre").value="";
    options.race.add("Race").value="";
    options.type.add("Type").value="";
    options.specificite.add("Specificite").value="";*/


    filteredPigs.forEach(pig => {
        if (pig.age) options.age.add(pig.age);
        if (pig.poids) options.poids.add(pig.poids);
        if (pig.genre) options.genre.add(pig.genre);
        if (pig.race) options.race.add(pig.race);
        if (pig.type) options.type.add(pig.type);
        if (pig.specificite) options.specificite.add(pig.specificite);
    });

    updateSelect('#SelectedAge', options.age, "Age");
    updateSelect('#SelectedPoids', options.poids, "Poids");
    updateSelect('#SelectedGenre', options.genre, "Genre");
    updateSelect('#SelectedRace', options.race, "Race");
    updateSelect('#SelectedType', options.type, "Type");
    updateSelect('#SelectedSpecificite', options.specificite, "Specificite");
    console.log("manao anle uptdate selection am le options *-*- updateSelectOptions(filteredPigs) ");
}

// Mettre à jour une liste déroulante
function updateSelect(selectId, options, title) {
    console.log("contenue anle element option filtre le efa traiter *-*-* updateSelect(selectId, options, title)");
    const select = document.querySelector(selectId);
    const currentValue = select.value;

    select.innerHTML = `<option value=""> -- ${title} -- </option>` // Ajouter l'option par défaut
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });

    // Si l'option actuelle est toujours valide, la conserver
    if (options.has(currentValue)) {
        select.value = currentValue;
    }
}

// Réinitialiser les filtres
function resetFilters() {
    const selects = document.querySelectorAll('#SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedRace, #SelectedType, #SelectedSpecificite');
    selects.forEach(select => select.value = ""); // Réinitialiser toutes les listes
    const pigData = getPigData();

    //applyFilters();
    updatePigVisibility(pigData); // Réafficher toutes les cartes

    updateSelectOptions(pigData); // Réinitialiser les options
    // visiblePigs = getVisiblePigs();
    updatePigCount(pigData);
    console.log("manao reset filtre sady miaffiche  anle nombre vaovao misy getpgdata*--- /*/*/* resetFilters() ");

}


/*** counting pig */
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
    statsContainer.appendChild(maleDiv).style.color = "red";
    console.log("manisa anle kisoa lahy *----*-* updatePigCount(filteredPigs)");

    // Ajouter les femelles
    const femaleDiv = document.createElement('div');
    femaleDiv.classList.add('stat-item');
    femaleDiv.textContent = `Femelles : ${femaleCount}`;
    statsContainer.appendChild(femaleDiv).style.color = "green";
    console.log("manisa anle kisoa vavy *-*-*- updatePigCount(filteredPigs)");
    // Ajouter le total
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('stat-item');
    totalDiv.textContent = `Total : ${total}`;
    statsContainer.appendChild(totalDiv).style.color = "purple";
    console.log("manisa anle kisoa total *-*-* updatePigCount(filteredPigs)");
}

// Exemple d'appel après filtrage (intégration avec la fonction de filtre)
function onFilterChange(filteredPigs) {
    updatePigVisibility(filteredPigs); // Met à jour les cochons visibles
    updatePigCount(filteredPigs); // Met à jour les statistiques
    console.log("onfiltre change zany ony. misy pig visibility ao de upadate pigs *-*-*-* onFilterChange(filteredPigs)");
}

// Conteneur HTML pour les statistiques
// Ajoutez ceci dans votre HTML à l'endroit où vous voulez afficher les statistiques
/*
<div id="pigStats" class="stats-container"></div>
*/

// CSS suggéré pour styliser les statistiques
/*
.stats-container {
    margin: 20px 0;
    font-size: 1.2rem;
    color: #333;
}
.stat-item {
    margin-bottom: 5px;
    font-weight: bold;
}
*/
//document.addEventListener('DOMContentLoaded', resetFilters,   console.log("dom loader zany ony mis resetfilters ao"));