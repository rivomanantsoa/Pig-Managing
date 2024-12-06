// Voici Les elements dans notre affichage.

const pigs = [
    {
        id: "C-FT023",
        age: "20 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Pure",
        objectif: "Truie",
        race: "Large White",
        image: "image/cochon1.jfif"
    },
    {
        id: "C-FE52",
        age: "2 mois",
        poids: "10 kg",
        genre: "Femelle",
        specificite: "Croisser",
        objectif: "Engraisse",
        race: "Large White",
        image: "image/bebeCohon.jfif"
    },
    {
        id: "C-ME032",
        age: "3 mois",
        poids: "25 kg",
        genre: "Femelle",
        specificite: "Croisser",
        objectif: "Engraisse",
        race: "Large White",
        image: "image/cochon2.jpg"
    },
    {
        id: "C-MT032",
        age: "3 mois",
        poids: "25 kg",
        genre: "Male",
        specificite: "Croisser",
        objectif: "Engraisse",
        race: "Porland",
        image: "image/cochonPorland.jpg"
    },
    {
        id: "C-ME032",
        age: "10 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Croisser",
        objectif: "Engraisse",
        race: "Meduim white",
        image: "image/mediumWhite.jpg"
    },
    {
        id: "C-MT045",
        age: "5 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Pure",
        objectif: "Truie",
        race: "Landrace",
        image: "image/cochonLandrace.jpg"
    },
    {
        id: "C-ME023",
        age: "10 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Croisser",
        objectif: "Engraisse",
        race: "Durock",
        image: "image/cochonnoire.jfif"
    },
    {
        id: "C-ME053",
        age: "10 mois",
        poids: "100 kg",
        genre: "Femelle",
        specificite: "Pure",
        objectif: "Engraisse",
        race: "Durock",
        image: "image/tamworth.jpg"
    },
    {
        id: "C-ME063",
        age: "5 mois",
        poids: "100 kg",
        genre: "Femelle",
        specificite: "Pure",
        objectif: "Engraisse",
        race: "Large White",
        image: "image/4cochon.jpg"
    },
    {
        id: "C-ME043",
        age: "10 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Pure",
        objectif: "Engraisse",
        race: "Large White",
        image: "image/1cochon.jpg"
    },
    {
        id: "C-ME743",
        age: "10 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Pure",
        objectif: "Engraisse",
        race: "Large White",
        image: "image/2cochon.avif"
    },
    // Ajoutez ici d'autres cochons
];

/// fonction pour afficher les elements
async function fetchPigs() {
    try {
        const response = await fetch('http://localhost:8000/managing/identite/');
        if (!response.ok) {
            throw new Error(`Erreur HTTP! statut: ${response.status}`);
        }
        const pigs = await response.json();
        console.log(pigs);
        displayPigs(pigs);
        updatePigCount(pigs);

    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

// Appeler la fonction pour récupérer et afficher les données
fetchPigs();


function displayPigs(pigsArray) {
    const container = document.getElementById('pig-container');
    container.innerHTML = ''; // Réinitialiser le conteneur
    pigsArray.forEach(pig => {
        const pigCard = `
            <div class="col-sm-6 col-md-3 col-xl-3 m-0 p-0" id="pig-card" onclick="show(this)">
                <div class="pig-card mx-auto">
                    <div id="couche">
                        <p class="age">Age: ${pig.age} mois</p>
                        <p class="poids">Poids: ${pig.poids} Kg</p>
                        <p class="genre">Genre: ${pig.genre}</p>
                        <p class="specificite">Specificite: ${pig.specificite}</p>
                        <p class="objectif">objectif: ${pig.objectif}</p>
                        <p class="race">Race: ${pig.race}</p>
                    </div>
                    <img src="${pig.image}" alt="${pig.id}">
                    <div class="text-overlay">${pig.matricule}</div>
                </div>
            </div>`;
        container.innerHTML += pigCard;
        console.log(pig.id+" dispaly");
    });
    console.log("ato amin ilay element.js isika izao - displayPigs(pigsArray)")
}

function petitDisplay(pigsArray) {
    const container = document.getElementById('pigs');
    container.innerHTML = ''; // Réinitialiser le conteneur
    pigsArray.forEach(pig => {
        const pigCard = `
            <div id="expig" onclick="show(this)">
                <div class="pig-cardex mx-auto">
                    <div id="couche">
                        <p class="age">Age: ${pig.age}</p>
                        <p class="poids">Poids: ${pig.poids}</p>
                        <p class="genre">Genre: ${pig.genre}</p>
                        <p class="specificite">Specificite: ${pig.specificite}</p>
                        <p class="objectif">objectif: ${pig.objectif}</p>
                        <p class="race">Race: ${pig.race}</p>
                    </div>
                    <img src="${pig.image}" alt="${pig.id}">
                    <div class="text-overlay" id="tite" >${pig.matricule}</div>
                </div>
            </div>`;
        container.innerHTML += pigCard;
        console.log(pig.matricule+ "matriculation");
    });
    console.log("ato amin ilay element.js isika izao - displayPigs(pigsArray)")
}
////// appel a la fonction de notre card

//displayPigs(pigs);

// manao anle le fonction show(), refa mclick de mipotra le zavatra

function show(element) {
    // Obtenir l'image à l'intérieur de l'élément cliqué
    const imgSrc = element.querySelector('img').src;
    const age = element.querySelector('.age').innerText;
    const poids = element.querySelector('.poids').innerText;
    const genre = element.querySelector('.genre').innerText;
    const race = element.querySelector('.race').innerText;
    const objectif = element.querySelector('.objectif').innerText;
    const specificite = element.querySelector('.specificite').innerText;
   const text = element.querySelector('.text-overlay').innerText;

    // Sélectionner l'élément d'affichage et changer l'image
    const showDiv = document.getElementById('show');
    const afficheImg = document.getElementById('afficheImg');
    const agee = document.getElementById('agee');
    const poidse = document.getElementById('poidse');
    const genree = document.getElementById('genree');
    const racee = document.getElementById('racee');
    const objectifee = document.getElementById('objectifee');
    const specificitee = document.getElementById('specificitee');
    const idee = document.getElementById('idee');
    const pigs = getVisiblePigs();
    // Afficher l'élément seulement s'il est actuellement masqué
    if (showDiv.style.display === "none") {
        showDiv.style.display = "block";
        document.body.style.overflowY = "hidden";
        document.getElementById("nav-bar").style.zIndex=0;
        document.getElementById("notification").style.display="block";
        document.getElementById("inscription").style.display="none";
      
        petitDisplay(pigs);
        console.log("function show() . if display none -> block");
       
    }

    // Mettre à jour l'image affichée
    agee.innerText = age;
    poidse.innerText = poids;
    genree.innerText = genre;
    racee.innerText = race;
    objectifee.innerText = objectif;
    specificitee.innerText = specificite;
   idee.innerText = text;
    afficheImg.src = imgSrc;
    console.log("function show() . manome anle element atao anaty notification");

}

// close nav-bar
function closeDiv() {
    document.getElementById('show').style.display = "none";
    document.body.style.overflowY = "auto";
    document.getElementById("notification").style.display="none";
    document.getElementById("nav-bar").style.zIndex=1;
    console.log(" *-*-*-  closeDiv()")
}
 function closeIns() {
    const annuler = document.getElementById('inscription');
    annuler.style.display = "none";
    document.getElementById("pig-form").reset();
    
 }


// manao recherche cochon

function getVisiblePigs() {
    const pigCards = document.querySelectorAll('.pig-card');
    const visiblePigs = [];

    pigCards.forEach(card => {
        if (card.parentElement.style.display !== 'none') {
            const age = card.querySelector('.age').innerText.split(': ')[1];
            const poids = card.querySelector('.poids').innerText.split(': ')[1];
            const genre = card.querySelector('.genre').innerText.split(': ')[1];
            const race = card.querySelector('.race').innerText.split(': ')[1];
            const objectif = card.querySelector('.objectif').innerText.split(': ')[1];
            const specificite = card.querySelector('.specificite').innerText.split(': ')[1];
           const matricule= card.querySelector('.text-overlay').innerText;

            const image = card.querySelector('img')?.getAttribute('src');
            //console.log(image),
            visiblePigs.push({ age, poids, genre, race, objectif, specificite, image, matricule});
        }
    });
   console.log("home.js **--*-*-*-getVisiblePigs()");
    return visiblePigs;
}
// Fonction de recherche
// Fonction de recherche
document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const pigCards = document.querySelectorAll('.pig-card');
   
    pigCards.forEach(card => {
        const age = card.querySelector('.age').innerText.toLowerCase();
        const poids = card.querySelector('.poids').innerText.toLowerCase();
        const genre = card.querySelector('.genre').innerText.toLowerCase();
        const race = card.querySelector('.race').innerText.toLowerCase();
        const objectif = card.querySelector('.objectif').innerText.toLowerCase();
        const specificite = card.querySelector('.specificite').innerText.toLowerCase();
    
        // Vérifier si le texte saisi correspond à l'une des caractéristiques

        if (
            age.includes(filter) ||
            poids.includes(filter) ||
            genre.includes(filter) ||
            race.includes(filter) ||
            objectif.includes(filter) ||
            specificite.includes(filter)
        ) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }

    });
    const visiblePigs = getVisiblePigs(); // Obtenir les cochons visibles
    updatePigCount(visiblePigs); 

  // Mettre à jour les statistiques après le filtrage
  console.log("Manao anle reherche tsika**********// de eto izy zao *-*- home.js");


});


/// pigs account

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


// ajouter un cochon

function inscription() {
    const inscription = document.getElementById('inscription');
    inscription.style.display = "block";
    
}