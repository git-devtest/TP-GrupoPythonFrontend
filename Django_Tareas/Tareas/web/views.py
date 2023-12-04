from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render (request, 'web/index.html', context={})




def Lista_de_Reservas(request):

    listatareas= [
        'RESERVA 1',
        'RESERVA 2',
        'RESERVA 3',
        'RESERVA 4',
        'RESERVA 5',
       
        ]
    
    context={
        'tareas': listatareas,
        'usuarioactivo': True,
    }

  
    return render (request,'web/listadetareas.html', context)





def Modificar(request):
    return HttpResponse(" ESTA SERA LA PAGINA DE MODIFICACION")

def Saludar(request, nombre):
    return HttpResponse( f"BIENVENIDO {nombre}") 



