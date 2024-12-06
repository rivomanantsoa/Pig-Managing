from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from inspect import isclass, getmembers
from rest_framework.viewsets import ViewSetMixin
from .views import IdentiteCreateView

router = DefaultRouter()

# Créer un ensemble pour suivre les préfixes déjà enregistrés
registered_prefixes = set()

# Parcourir toutes les classes définies dans views.py
for name, cls in getmembers(views, isclass):
    # Vérifier si la classe est une vue valide (hérite de ViewSetMixin)
    if issubclass(cls, ViewSetMixin) and cls.__module__ == views.__name__:
        prefix = name.replace("View", "").lower()  # Ex. VaccinCochonView -> vaccincochon

        # Vérifiez si le préfixe est déjà enregistré
        if prefix in registered_prefixes:
            print(f"Duplicate detected: {prefix} for {cls}")
        else:
            print(f"Registering route: {prefix} for {cls}")
            router.register(prefix, cls)
            registered_prefixes.add(prefix)  # Ajoutez le préfixe à l'ensemble

urlpatterns = [
    path('', include(router.urls)),
    path('identite/', IdentiteCreateView.as_view(), name='create_identite'),
]
