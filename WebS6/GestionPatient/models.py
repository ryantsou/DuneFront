from django.utils import timezone
from django.db import models


class Patient(models.Model):
    nom = models.CharField(max_length=150)
    prenom = models.CharField(max_length=100)
    TYPE_SELECT = (
        (' ', ' '),
        ('Féminin', 'Féminin'),
        ('Masculin', 'Masculin'),
    )
    sexe = models.CharField(max_length=10, choices=TYPE_SELECT, default=' ')
    date_de_naissance = models.DateField(default=timezone.now)
    lieu_de_naissance = models.CharField(max_length=100)
    BLOOD_SELECT = (
        (' ', ' '),
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    )
    groupe_sanguin = models.CharField(max_length=10, choices=BLOOD_SELECT, default=' ')
    DOCTOR_SELECT = (
        (' ', ' '),
        ('RAMAVONIRINA Tantely', 'RAMAVONIRINA Tantely'),
        ('NIRINA Sylvianne', 'NIRINA Sylvianne'),
    )
    medecin_traitant = models.CharField(max_length=100, choices=DOCTOR_SELECT, default=' ')


class Consultation(models.Model):
    date = models.DateField(default=timezone.now)
    heure = models.TimeField(default=timezone.now)
    nom = models.CharField(max_length=150)
    prenom = models.CharField(max_length=100)
    DOCTOR_SELECT = (
        (' ', ' '),
        ('RAMAVONIRINA Tantely', 'RAMAVONIRINA Tantely'),
        ('NIRINA Sylvianne', 'NIRINA Sylvianne'),
    )
    medecin_traitant = models.CharField(max_length=100, choices=DOCTOR_SELECT, default=' ')
    SERVICE_SELECT = (
        ('', ' '),
        ('ORL', 'ORL'),
        ('PPH', 'PPH'),
        ('Pédiatrie', 'Pédiatrie'),
        ('Chirurgie', 'Chirurgie'),
        ('Gynécologie', 'Gynécologie'),
        ('Laboratoire', 'Laboratoire'),
        ('Dermatologie', 'Dermatologie'),
        ('Radiographie', 'Radiographie'),
        ('Ophtalmologie', 'Ophtalmologie'),
        ('Neuropsychatrie', 'Neuropsychatrie'),
    )
    service = models.CharField(max_length=100, choices=SERVICE_SELECT, default=' ')
    PAYMENT_SELECT = (
        (' ', ' '),
        ('Non payé', 'Non payé'),
        ('Payé à moitié', 'Payé à moitié'),
        ('Payé en entier', 'Payé en entier'),
    )
    frais = models.CharField(max_length=25, choices=PAYMENT_SELECT, default=' ')
