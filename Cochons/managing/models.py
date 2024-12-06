from django.db import models

class Veterinaire(models.Model):
    nom = models.CharField(max_length=100)
    date_vet = models.DateField()
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    contact = models.CharField(max_length=100, blank=True, null=True)  # Téléphone ou email

    def __str__(self):
        return self.nom

class NourritureStock(models.Model):
    nom = models.CharField(max_length=100)
    poids_stock = models.FloatField()  # en kilogrammes
    provenance = models.CharField(max_length=100, blank=True, null=True)  # Fournisseur

    def __str__(self):
        return self.nom

class StockVaccin(models.Model):
    nom = models.CharField(max_length=100)
    nbr_stock = models.IntegerField()

    def __str__(self):
        return self.nom

class EnterStock(models.Model):
    date_entree = models.DateField()
    quantite_entree = models.FloatField()  # en kilogrammes ou unités
    type_stock = models.CharField(max_length=50, choices=[('nourriture', 'Nourriture'), ('vaccin', 'Vaccin')])
    nourriture = models.ForeignKey(NourritureStock, on_delete=models.CASCADE, related_name='entries', blank=True, null=True)
    vaccin = models.ForeignKey(StockVaccin, on_delete=models.CASCADE, related_name='entries', blank=True, null=True)

class Identite(models.Model):
    matricule = models.CharField(max_length=50, unique=True)
    nom = models.CharField(max_length=100)
    age = models.IntegerField(blank= True , null=True)  # en mois
    poids = models.IntegerField( null=True)
    race = models.CharField(max_length=100)
    genre = models.CharField(max_length=100, null=True)
    specificite = models.CharField(max_length=100, null=True)
    objectif = models.CharField(max_length=100)  # But ou finalité
    image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.nom

class Suivi(models.Model):
    date = models.DateField()
    identite = models.ForeignKey(Identite, on_delete=models.CASCADE, related_name='suivis')

class Sante(models.Model):
    suivi = models.ForeignKey(Suivi, on_delete=models.CASCADE, related_name='sante')
    temperature = models.FloatField()  # en °C
    etat_visuel = models.CharField(max_length=255)
    commentaire = models.TextField(blank=True, null=True)

class MangerCochon(models.Model):
    date = models.DateField()
    heure = models.TimeField()
    quantite_consomme = models.FloatField()  # en kilogrammes
    cochon = models.ForeignKey(Identite, on_delete=models.CASCADE, related_name='repas')
    nourriture = models.ForeignKey(NourritureStock, on_delete=models.CASCADE, related_name='consommations')

class VaccinCochon(models.Model):
    date = models.DateField()
    quantite = models.IntegerField()
    usage = models.CharField(max_length=255)  # Type ou raison d'administration
    cochon = models.ForeignKey(Identite, on_delete=models.CASCADE, related_name='vaccins')
    vaccin = models.ForeignKey(StockVaccin, on_delete=models.CASCADE, related_name='utilisations')
    veterinaire = models.ForeignKey(Veterinaire, on_delete=models.SET_NULL, null=True, blank=True)
