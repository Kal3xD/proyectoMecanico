from django.urls import path
from . import views



urlpatterns = [
    path('index', views.index, name='index'),
    path('chequeoMotor', views.chequeoMotor, name='chequeoMotor'),
    path('contacto', views.contacto, name='contacto'),
    path('jsDireccionales', views.jsDireccionales, name='jsDireccionales'),
    path('nuevas_atenciones', views.nuevas_atenciones, name='nuevas_atenciones'),
    path('sistemasElectronico', views.sistemaElectronico, name='sistemaElectronico')

]
