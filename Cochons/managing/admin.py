from django.contrib import admin
from django.apps import apps

# Obtenir tous les modèles de votre application actuelle
app_models = apps.get_app_config('managing').get_models()

# Enregistrer tous les modèles automatiquement
for model in app_models:
    admin.site.register(model)
