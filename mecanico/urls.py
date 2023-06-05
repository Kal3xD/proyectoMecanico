from django.urls import path
from . import views



urlpatterns = [
    path('index', views.index, name='index'),
    path('prueba', views.prueba, name='prueba'),
    path('show', views.show, name='show')
]
