from django.shortcuts import render
from rest_framework import generics
from .serializers import PizzeriaListSerializer
from .models import Pizzeria
# Create your views here.

class PizzeriaListAPIView(generics.ListAPIView):
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaListSerializer
