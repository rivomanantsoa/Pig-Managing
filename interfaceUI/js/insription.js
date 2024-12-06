/*document.getElementById('Valider').addEventListener('click', function() {
    // Récupérer les valeurs du formulaire
    const race = document.querySelector('[name="race"]').value;
    const poids = document.querySelector('[name="poids"]').value;
    const genre = document.querySelector('[name="genre"]').value;
    const specificite = document.querySelector('[name="specificite"]').value;
    const type = document.querySelector('[name="type"]').value;
    const image = document.querySelector('[name="Image"]').value;

    // Vérifier si tous les champs sont remplis
    if (!race || !poids || !genre || !specificite || !type || !image) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Créer l'objet de données à envoyer
    const pigData = {
        race: race,
        poids: poids,
        genre: genre,
        specificite: specificite,
        type: type,
        image: image
    };

    // Envoyer les données à l'API Django avec fetch
    fetch('http://localhost:8000/identite/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pigData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Cochon ajouté:', data);
        alert('Cochon ajouté avec succès !');
        closeIns(); // Fermer le formulaire après l'ajout
        // Vous pouvez aussi recharger la liste des cochons ou mettre à jour l'interface
    })
    .catch(error => {
        console.error('Erreur lors de l\'ajout du cochon:', error);
        alert('Une erreur est survenue.');
    });
});


/* javascript*/
function boxIns() {
    const container = document.getElementById('inscription');
    container.innerHTML = 
 `
  <div style="justify-content: space-between; width: 100%; display: flex;">
                Ajouter des(un/une) cochon(s) 
                <img src="icons/close-svgrepo-com.svg" style="margin-top: -10px;" alt="" width="35px" height="35px" onclick="closeIns();">
            </div>
            <form id="pig-form" enctype="multipart/form-data" >
                <div style="display: flex; width: 100%;">
               <div style="padding: 10px; width: 50%;">
                Matricule 
                <input type="text" name="matricule" placeholder="ex : MC-12" class="form form-control" style="width: 100%;">
                Nom
                <input type="text" name="nom" placeholder="ex : Pela"  class="form-control" style="width: 100%;">
                Age
                <input type="number" name="age" placeholder="ex : 15 Mois" class="form-control" style="width: 100%;">
                Poids <input type="number" name="poids" placeholder="ex : 120 Kg" class="form-control" style="width: 100%;">
               
            </div>
            <div style="padding: 10px; width: 50%;">
                Race
                <select name="race" class="form-control" style="width: 100%;">
                    <option value="">--Select Race--</option>
                    <option value="Large White">Large White</option>
                    <option value="Medium White">Medium White</option>
                    <option value="Porland">Porland</option>
                    <option value="Durock">Durock</option>
                    <option value="Landrace">Landrace</option>
                    <option value="Petrain">Petrain</option>
                </select>
               
                Genre
                <select name="genre" class="form-control" style="width: 100%;">
                    <option value="">--Select Genre--</option>
                    <option value="Male">Male</option>
                    <option value="Femelle">Femelle</option>
                </select>
                Specificité
                <select name="specificite" class="form-control" style="width: 100%;">
                    <option value="">--Select Specificité--</option>
                    <option value="Croiser">Croiser</option>
                    <option value="Pure">Pure</option>
                </select>
                Objectif
                <select name="objectif" class="form-control" style="width: 100%;">
                    <option value="">--Select Type--</option>
                    <option value="Engraisse">Engraisse</option>
                    <option value="Truie">Truie</option>
                </select>
               
               
            </div>
        </div>
            Image <input type="file" name="image" class="form-control" style="width: 80%;">
            <div>
                <button type="submit" class="btn btn-success m-2">Valider</button>
                <button type="button" onclick="closeIns()" class="btn btn-danger m-2">Annuler</button>
            </div>
            </form>
           `;
}

boxIns();



document.getElementById("pig-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Empêcher l'envoi du formulaire traditionnel
  
    
   // spinner.style.display = "none";
  

    const formData = new FormData();
    formData.append('matricule', document.querySelector('[name="matricule"]').value);
    formData.append('nom', document.querySelector('[name="nom"]').value);
    formData.append('age', document.querySelector('[name="age"]').value);
    formData.append('race', document.querySelector('[name="race"]').value);
    formData.append('poids', document.querySelector('[name="poids"]').value);
    formData.append('genre', document.querySelector('[name="genre"]').value);
    formData.append('specificite', document.querySelector('[name="specificite"]').value);
    formData.append('objectif', document.querySelector('[name="objectif"]').value);
    formData.append('image', document.querySelector('[name="image"]').files[0]);

    fetch('http://localhost:8000/managing/identite/', {
        method: 'POST',
        body: formData,
       
       
    })
    
    .then(response =>{ 
        
        response.json();

    })
    .then(data => {
        //spinner.style.display = "block",
        console.log('Succès:', data);
        fetchPigs();
        //alert("Le cochon :"+ document.querySelector('[name="nom"]').value + " est bien ajouter!");
        document.getElementById("pig-form").reset();
        //spinner.style.display = "none";
        
    })
    .catch((error) => {
        console.error('Erreur:', error);
        spinner.style.display = "none";
        submitButton.disabled = false;
    });
});
