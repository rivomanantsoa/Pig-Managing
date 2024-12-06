
// Données des cochons
const pigs = [
    {
        id: "C-FT023",
        age: "20 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Pure",
        type: "Truie",
        race: "Large White",
        image: "image/cochon1.jfif"
    },
    {
        id: "C-FE52",
        age: "2 mois",
        poids: "10 kg",
        genre: "Femelle",
        specificite: "Croisser",
        type: "Engraisse",
        race: "Large White",
        image: "image/bebeCohon.jfif"
    },
    {
        id: "C-ME032",
        age: "3 mois",
        poids: "25 kg",
        genre: "Femelle",
        specificite: "Croisser",
        type: "Engraisse",
        race: "Large White",
        image: "image/cochon2.jpg"
    },
    {
        id: "C-MT032",
        age: "3 mois",
        poids: "25 kg",
        genre: "Male",
        specificite: "Croisser",
        type: "Engraisse",
        race: "Porland",
        image: "image/cochonPorland.jpg"
    },
    {
        id: "C-ME032",
        age: "10 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Croisser",
        type: "Engraisse",
        race: "Meduim white",
        image: "image/mediumWhite.jpg"
    },
    {
        id: "C-MT045",
        age: "5 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Pure",
        type: "Truie",
        race: "Landrace",
        image: "image/cochonLandrace.jpg"
    },
    {
        id: "C-ME023",
        age: "10 mois",
        poids: "100 kg",
        genre: "Male",
        specificite: "Croisser",
        type: "Engraisse",
        race: "Durock",
        image: "image/cochonnoire.jfif"
    },
    {
        id: "C-ME053",
        age: "10 mois",
        poids: "100 kg",
        genre: "Femelle",
        specificite: "Pure",
        type: "Engraisse",
        race: "Durock",
        image: "image/tamworth.jpg"
    },
    {
        id: "C-ME063",
        age: "5 mois",
        poids: "100 kg",
        genre: "Femelle",
        specificite: "Pure",
        type: "Engraisse",
        race: "Large White",
        image: "image/4cochon.jpg"
    },
    // Ajoutez ici d'autres cochons
];

// Fonction pour afficher les cartes
function displayPigs(pigsArray) {
    const container = document.getElementById('pig-container');
    container.innerHTML = ''; // Réinitialiser le conteneur
    pigsArray.forEach(pig => {
        const pigCard = `
            <div class="col-sm-6 col-md-3 col-xl-3 m-0 p-0" id="pig-card" onclick="show(this)">
                <div class="pig-card mx-auto">
                    <div id="couche">
                        <p class="age">Age: ${pig.age}</p>
                        <p class="poids">Poids: ${pig.poids}</p>
                        <p class="genre">Genre: ${pig.genre}</p>
                        <p class="specificite">Specificite: ${pig.specificite}</p>
                        <p class="type">Type: ${pig.type}</p>
                        <p class="race">Race: ${pig.race}</p>
                    </div>
                    <img src="${pig.image}" alt="${pig.id}">
                    <div class="text-overlay">${pig.id}</div>
                </div>
            </div>`;
        container.innerHTML += pigCard;
    });
    console.log("ato amin ilay element.js isika izao - displayPigs(pigsArray)")
}
function petitDisplay(pigsArray) {
    const container = document.getElementById('pigs');
    console.log("voici le petite afichage de notre petit pig display");
    container.innerHTML = ''; // Réinitialiser le conteneur
    pigsArray.forEach(pig => {
        const pigCard = `
            <div class="col-sm-6 col-md-3 col-xl-3 m-0 p-0" id="pig-card">
                <div class="expig mx-auto">
                    <div id="petitNoot">
                    <img src="${pig.image}" alt="${pig.id}">
                    <div class="text-overlay">${pig.id}</div>
                        <p class="age">Age: ${pig.age}</p>
                        <p class="poids">Poids: ${pig.poids}</p>
                        <p class="genre">Genre: ${pig.genre}</p>
                        <p class="specificite">Specificite: ${pig.specificite}</p>
                        <p class="type">Type: ${pig.type}</p>
                        <p class="race">Race: ${pig.race}</p>
                    </div>
                    
                </div>
            </div>`;
        container.innerHTML += pigCard;
    });
    console.log("ato amile elemtn.js koa isika izao /petitDisplay(pigsArray)")
}



// Initialiser l'affichage
displayPigs(pigs);
