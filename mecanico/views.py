from django.shortcuts import render

# Create your views here.

def index(request):
    context={}
    return render(request, 'mecanico/index.html', context)

def prueba(request):
    context={}
    return render(request, 'mecanico/prueba.html', context)



