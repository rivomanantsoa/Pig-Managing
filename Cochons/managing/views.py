# backend/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets
from .models import Veterinaire, NourritureStock, StockVaccin, EnterStock, Identite, Suivi, Sante, MangerCochon, VaccinCochon
from .serializers import VeterinaireSerializer, NourritureStockSerializer, StockVaccinSerializer, EntrerStockSerializer, IdentiteSerializer, SuiviSerializer, SanteSerializer, MangerCochonSerializer, VaccinCochonSerializer

class IdentiteCreateView(APIView):
    parser_classes = (MultiPartParser, FormParser)  # Permet de gérer les fichiers téléchargés
    def post(self, request):
        serializer = IdentiteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Enregistrer les données dans la base
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class VeterinaireView(viewsets.ModelViewSet):
    queryset = Veterinaire.objects.all()
    serializer_class = VeterinaireSerializer

class NourritureStockView(viewsets.ModelViewSet):
    queryset = NourritureStock.objects.all()
    serializer_class = NourritureStockSerializer

class StockVaccinView(viewsets.ModelViewSet):
    queryset = StockVaccin.objects.all()
    serializer_class = StockVaccinSerializer

class EnterStockView(viewsets.ModelViewSet):
    queryset = EnterStock.objects.all()
    serializer_class = EntrerStockSerializer

class IdentiteView(viewsets.ModelViewSet):
    queryset = Identite.objects.all()
    serializer_class = IdentiteSerializer

class SuiviView(viewsets.ModelViewSet):
    queryset = Suivi.objects.all()
    serializer_class = SuiviSerializer

class SanteView(viewsets.ModelViewSet):
    queryset = Sante.objects.all()
    serializer_class = SanteSerializer

class MangerCochonView(viewsets.ModelViewSet):
    queryset = MangerCochon.objects.all()
    serializer_class = MangerCochonSerializer

class VaccinCochonView(viewsets.ModelViewSet):
    queryset = VaccinCochon.objects.all()
    serializer_class = VaccinCochonSerializer 

'''from rest_framework import viewsets
from django.apps import apps
from . import serializers  # Importer votre fichier serializers

# Récupérer tous les modèles de votre application
app_models = apps.get_app_config('managing').get_models()

# Créer un dictionnaire pour mapper les serializers à leurs modèles
serializer_classes = {
    name.replace('Serializer', ''): cls
    for name, cls in serializers.__dict__.items()
    if isinstance(cls, type)
}

# Générer les classes de vue dynamiquement
# Générer les classes de vue dynamiquement
view_classes = {}
for model in app_models:
    model_name = model.__name__  # Nom du modèle
    serializer_class = serializer_classes.get(model_name)  # Associer le serializer
    if serializer_class:
        view_class = type(
            f"{model_name}View",
            (viewsets.ModelViewSet,),
            {
                'queryset': model.objects.all(),
                'serializer_class': serializer_class,
            }
        )
        print(f"Generated view: {model_name}View for {model_name}")
        view_classes[f"{model_name}View"] = view_class  # Enregistrer la classe

globals().update(view_classes)
'''