var caja_nombre_mecanico = document.getElementById('caja_nombre_mecanico');
var caja_apellido_mecanico = document.getElementById('caja_apellido_mecanico');
var TipoAtencion = document.getElementById('TipoAtencion');
var Fecha = document.getElementById('Fecha');
var descripcion_proce = document.getElementById('descripcion_proce');
var error = document.getElementById('error');

error.style.color = 'Red';

function enviarformulario (){
        console.log('Enviando formulario...')

        var MensajeError = [];

        if(caja_nombre_mecanico.value === null || caja_nombre_mecanico.value === ''){
            MensajeError.push('Ingresar nombre de mecanico');            
            }

        if(caja_apellido_mecanico.value === null || caja_apellido_mecanico.value === ''){
            MensajeError.push('Ingresar apellido de mecanico');            
            }
        if(TipoAtencion.value === null || TipoAtencion.value === ''){
            MensajeError.push('Ingresar tipo de atención');            
            }
        
        if(Fecha.value === null || Fecha.value === ''){
            MensajeError.push('Ingresar fecha de atención');            
            }

        if(descripcion_proce.value === null || descripcion_proce.value === ''){
            MensajeError.push('Ingresar datos de atención');            
            }

       

            error.innerHTML = MensajeError.join(' , ');
            
        return false;

}