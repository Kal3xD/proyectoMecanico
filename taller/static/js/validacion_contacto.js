var caja_nombre = document.getElementById('caja_nombre');
var caja_apellido = document.getElementById('caja_apellido');
var caja_correo = document.getElementById('caja_correo');
var Fecha = document.getElementById('Fecha');
var comentario_usuario = document.getElementById('comentario_usuario');
var error = document.getElementById('error');

error.style.color = 'Red';

function enviarformulariocontacto (){
        console.log('Enviando formulario...')

        var MensajeError = [];

        if(caja_nombre.value === null || caja_nombre.value === ''){
            MensajeError.push('Ingresar nombre de contacto');            
            }

        if(caja_apellido.value === null || caja_apellido.value === ''){
            MensajeError.push('Ingresar apellido de contacto');            
            }
        if(caja_correo.value === null || caja_correo.value === ''){
            MensajeError.push('Ingresar correo electronico');            
            }
        
        if(Fecha.value === null || Fecha.value === ''){
            MensajeError.push('Ingresar fecha');            
            }

        if(comentario_usuario.value === null || comentario_usuario.value === ''){
            MensajeError.push('Ingresar duda o comentario');            
            }

       

            error.innerHTML = MensajeError.join(' , ');
            
        return false;

}