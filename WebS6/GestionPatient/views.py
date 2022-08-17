from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PatientSerializer, ConsultationSerializer
from .models import Patient, Consultation
# Create your views here.


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/patient-list/',
        'Detail': '/patient-detail/<str:pk>/',
        'Create': '/patient-create/',
        'Update': '/patient-update/<str:pk>/',
        'Delete': '/patient-delete/<str:pk>/',
        'Consultation': '/consultation-list/'
    }
    return Response(api_urls)


@api_view(['GET'])
def patientList(request):
    patients = Patient.objects.all();
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def patientDetail(request, pk):
    patients = Patient.objects.get(id=pk)
    serializer = PatientSerializer(patients, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def patientCreate(request):
    serializer = PatientSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def patientUpdate(request, pk):
    patients = Patient.objects.get(id=pk)
    serializer = PatientSerializer(instance=patients, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def patientDelete(request, pk):
    patients = Patient.objects.get(id=pk)
    patients.delete()

    return Response("Suppression avec succès")


@api_view(['GET'])
def consultationList(request):
    consultations = Consultation.objects.all()
    serializer = ConsultationSerializer(consultations, many=True)
    return Response(serializer.data)
