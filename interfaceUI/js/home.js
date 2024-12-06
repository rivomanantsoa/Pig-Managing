function show(element) {
    // Obtenir l'image à l'intérieur de l'élément cliqué
    const imgSrc = element.querySelector('img').src;
    const age = element.querySelector('.age').innerText;
    const poids = element.querySelector('.poids').innerText;
    const genre = element.querySelector('.genre').innerText;
    const race = element.querySelector('.race').innerText;
    const type = element.querySelector('.type').innerText;
    const specificite = element.querySelector('.specificite').innerText;

    // Sélectionner l'élément d'affichage et changer l'image
    const showDiv = document.getElementById('show');
    const afficheImg = document.getElementById('afficheImg');
    const agee = document.getElementById('agee');
    const poidse = document.getElementById('poidse');
    const genree = document.getElementById('genree');
    const racee = document.getElementById('racee');
    const typee = document.getElementById('typee');
    const specificitee = document.getElementById('specificitee');
   
    // Afficher l'élément seulement s'il est actuellement masqué
    if (showDiv.style.display === "none") {
        showDiv.style.display = "block";
        document.body.style.overflowY = "hidden";
        document.getElementById("menu").style.zIndex=0;
        document.getElementById("notification").style.display="block";
      //const pigs = getVisiblePigs();
       //petitDisplay(pigs);
      const test = applyFilters();
       petitDisplay(test);
    test.forEach(pig=>{
        console.log("les nom des cochon *** beber==="+pig.imgSrc+ "*-*---*show(element)");
    })
       
    }

    // Mettre à jour l'image affichée
    agee.innerText = age;
    poidse.innerText = poids;
    genree.innerText = genre;
    racee.innerText = race;
    typee.innerText = type;
    specificitee.innerText = specificite;
    afficheImg.src = imgSrc;
    console.log("Manao Show element izy eto *****/****/*****/*");

}
// close menu
function closeDiv() {
    document.getElementById('show').style.display = "none";
    document.body.style.overflowY = "auto";
    document.getElementById("notification").style.display="none";
    document.getElementById("menu").style.zIndex=1;
    console.log("home.js *-*-*-  closeDiv()")
}


// recherche de cochon
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
            const image = card.querySelector('img')?.getAttribute('src');
            //console.log(image),
            visiblePigs.push({ age, poids, genre, race, type, specificite, image });
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
        const type = card.querySelector('.type').innerText.toLowerCase();
        const specificite = card.querySelector('.specificite').innerText.toLowerCase();
    
        // Vérifier si le texte saisi correspond à l'une des caractéristiques

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
  console.log("Manao anle reherche tsika**********// de eto izy zao *-*- home.js");
  const visiblePigs = getVisiblePigs();
  updatePigCount(visiblePigs);
  updateSelectOptions(visiblePigs);

});





// Initialisation des statistiques au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    const allPigs = getVisiblePigs();
    //updatePigCount(allPigs);
   // updateSelectOptions(allPigs);
    console.log("ty kou mis manao log anakiray ******////*****/*/*/ home.js");
});


/*    chagment d etat de filtrage et de reherche *///

// Écouter les changements sur la checkbox
document.getElementById('checking').addEventListener('change', function () {
    const isChecked = this.checked;

    // Activer/Désactiver le champ de recherche
    const searchInput = document.getElementById('searchInput');
    const text = document.getElementById("liste");
    searchInput.disabled = isChecked;
    
    // Afficher/Masquer les éléments de filtrage
    const filterElements = document.getElementById('amoxie');
    if (isChecked) {
        filterElements.style.display = 'flex';
        searchInput.value = "";
       // searchInput.style.display="none";
        searchInput.placeholder="Filtrage avance";
       resetFilters();
       displayPigs(pigs);
       text.style.display = "none";
       console.log("refa checked le izy de ato.*-*-**getElementById('checking').addEventListener('change', function () home.js");

        
    } else {
        filterElements.style.display = 'none';
        resetFilters();
        searchInput.placeholder="Faire un recherche";
        text.style.display = "block";
        console.log("refa tsy checded le izy de ato zany hoe miverina manao rechreche*-*-*-*-getElementById('checking').addEventListener('change', function () home.js");
    }
});




