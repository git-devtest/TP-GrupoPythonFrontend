from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name= 'index'),
    path('Modificacion', views.Modificar, name='Modificar'),
    path('Saludar/<str:nombre>', views.Saludar, name='Saludar'),
    path('reservas', views.Lista_de_Reservas, name='Lista_de_Tareas')
]