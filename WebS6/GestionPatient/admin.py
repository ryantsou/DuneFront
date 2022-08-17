from django.contrib import admin
from .models import Patient, Consultation


@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'sexe', 'date_de_naissance', 'lieu_de_naissance',
                    'groupe_sanguin', 'medecin_traitant')
    list_filter = ('nom', 'prenom')
    search_fields = ('nom', 'prenom', 'groupe_sanguin')
    date_hierarchy = 'date_de_naissance'


@admin.register(Consultation)
class ConsultationAdmin(admin.ModelAdmin):
    list_display = ('date', 'heure', 'nom', 'prenom', 'medecin_traitant', 'service', 'frais')
    list_filter = ('nom', 'prenom')
    search_fields = ('nom', 'prenom', 'service')
    date_hierarchy = 'date'
