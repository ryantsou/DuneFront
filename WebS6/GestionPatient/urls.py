from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('patient-list/', views.patientList, name='patient-list'),
    path('patient-detail/<str:pk>/', views.patientDetail, name='patient-detail'),
    path('patient-create/', views.patientCreate, name='patient-create'),
    path('patient-update/<str:pk>/', views.patientUpdate, name='patient-update'),
    path('patient-delete/<str:pk>/', views.patientDelete, name='patient-delete'),
    path('consultation-list/', views.consultationList, name='consultation-list'),
]
