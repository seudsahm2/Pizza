from django.shortcuts import render
from django.contrib.auth import get_user_model

from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from rest_framework import permissions

from .serializers import PizzeriaListSerializer,PizzeriaDetailSerializer, UserSerializer
from .models import Pizzeria

import logging
from rest_framework.response import Response
from rest_framework import status

logger = logging.getLogger(__name__)
# Create your views here.

class PizzeriaListAPIView(generics.ListAPIView):
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaListSerializer

class PizzeriaRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaCreateAPIView(generics.CreateAPIView):
    parser_classes = [MultiPartParser]
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer

    def create(self, request, *args, **kwargs):
        logger.info(f"Received data: {request.data}")
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            logger.info("Data is valid")
            return super().create(request, *args, **kwargs)
        else:
            logger.error(f"Validation errors: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PizzeriaRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer

class PizzeriaDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Pizzeria.objects.all()   


class UserCreateView(generics.CreateAPIView):
    model = get_user_model()
    parser_classes = [MultiPartParser]
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
