from django.shortcuts import render
from rest_framework import generics
from .models import Pizzaria
from .serializers import PizzariaListSerializer, PizzariaDetailsSerializer
# Create your views here.
class PizzariaListAPIView(generics.ListAPIView):
    queryset = Pizzaria.objects.all()
    serializer_class = PizzariaListSerializer
    
class PizzariaDetailAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Pizzaria.objects.all()
    serializer_class = PizzariaDetailsSerializer
    
class PizzariaCreateAPIView(generics.CreateAPIView):
    queryset = Pizzaria.objects.all()
    serializer_class = PizzariaDetailsSerializer
    
class PizzariaRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Pizzaria.objects.all()
    serializer_class = PizzariaDetailsSerializer
    
class PizzariaDeleteAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Pizzaria.objects.all()
    serializer_class = PizzariaDetailsSerializer