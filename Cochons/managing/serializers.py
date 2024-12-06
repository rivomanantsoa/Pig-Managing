# backend/serializers.py
from .models import Veterinaire, NourritureStock, StockVaccin, EnterStock, Identite, Suivi, Sante, MangerCochon, VaccinCochon

from rest_framework import serializers

class VeterinaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Veterinaire
        fields = '__all__'  # Tous les champs du modèle

class NourritureStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = NourritureStock
        fields = '__all__'

class StockVaccinSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockVaccin
        fields = '__all__'

class EntrerStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnterStock
        fields = '__all__'

class IdentiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Identite
        fields = '__all__'       

class SuiviSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suivi
        fields = '__all__'

class SanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sante
        fields = '__all__'

class MangerCochonSerializer(serializers.ModelSerializer):
    class Meta:
        model = MangerCochon
        fields = '__all__'

class VaccinCochonSerializer(serializers.ModelSerializer):
    class Meta:
        model = VaccinCochon
        fields = '__all__'

