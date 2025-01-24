from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Event
from .serializers import EventSerializer
# Create your views here.

from rest_framework import generics
from .models import Kindergarten, School, University, TrainingCenter
from .serializers import KindergartenSerializer, SchoolSerializer, UniversitySerializer, TrainingCenterSerializer

# Kindergarten Views
class KindergartenListView(generics.ListCreateAPIView):
    queryset = Kindergarten.objects.all()
    serializer_class = KindergartenSerializer

class KindergartenDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Kindergarten.objects.all()
    serializer_class = KindergartenSerializer

# School Views
class SchoolListView(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class SchoolDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

# University Views
class UniversityListView(generics.ListCreateAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class UniversityDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

# Training Center Views
class TrainingCenterListView(generics.ListCreateAPIView):
    queryset = TrainingCenter.objects.all()
    serializer_class = TrainingCenterSerializer

class TrainingCenterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TrainingCenter.objects.all()
    serializer_class = TrainingCenterSerializer

# Event Views
class EventListView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        """Set the event organizer as one of the educational institutions."""
        # You can add logic to specify the organizer automatically or manually
        serializer.save()

class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]
