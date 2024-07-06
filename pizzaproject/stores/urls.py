# use ctrl + I to generate code
from django.urls import path
from . import views

urlpatterns = [
    path('',views.PizzariaListAPIView.as_view(), name = "pizzaria_list"),
    path('<int:id>/', views.PizzariaDetailAPIView.as_view(), name = "pizzaria_detail"),
    path('create/', views.PizzariaCreateAPIView.as_view(), name = "pizzaria_create"),
    path('update/<int:id>', views.PizzariaRetrieveUpdateAPIView.as_view(), name = "pizzaria_update"),
    path('delete/<int:id>', views.PizzariaDeleteAPIView.as_view(), name = "pizzaria_delete")
]