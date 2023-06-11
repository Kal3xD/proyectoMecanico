from django.shortcuts import render

# Create your views here.

def index(request):
    context={}
    return render(request, 'mecanico/index.html', context)


def chequeoMotor(request):
    context={}
    return render(request, 'mecanico/chequeoMotor.html', context)

def contacto(request):
    context={}
    return render(request, 'mecanico/contacto.html', context)

def nuevas_atenciones(request):
    context={}
    return render(request, 'mecanico/nuevas_atenciones.html', context)

def sistemaElectronico(request):
    context={}
    return render(request, 'mecanico/sistemaElectronico.html', context)

def jsDireccionales(request):
    context={}
    return render(request, 'mecanico/jsDireccionales.html', context)