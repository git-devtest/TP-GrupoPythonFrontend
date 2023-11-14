const validarReserva = () => {
    const formulario = document.querySelector('#reservas');
    const patente = document.querySelector('#patente');
    const fecha = document.querySelector('#fecha');
    const hora = document.querySelector('#hora');
    const tipo = document.querySelector('#tipo');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(patente.value, fecha.value, hora.value, tipo.value);
        if (patente.value === '') {
            mensajesAlUsuario('Por favor, escribe tu patente', true);
            patente.focus();
            return false;
        }else if (fecha.value === '') {
            mensajesAlUsuario('Por favor, elige una fecha', true);
            fecha.focus();
            return false;
        } else if (hora.value === '') {
            mensajesAlUsuario('Por favor, elige un horario', true);
            hora.focus();
            return false;
        } else if (tipo.value === '') {
            mensajesAlUsuario('Por favor, elige tu tipo de reserva', true);
            tipo.focus();
            return false;
        } else {
            mensajesAlUsuario(`Realizaste tu reserva, ${patente.value} desde ${parseInt(fecha.value.split('-')[2])}/${fecha.value.split('-')[1]}/${fecha.value.split('-')[0]} a las ${parseInt(hora.value.split(':')[0])  + ':' + hora.value.split(':')[1]} hasta el ${calculoFecha(fecha.value, hora.value, tipo.value)}`, false);
        }
        formulario.reset();
        const boton = document.createElement('button');
        boton.textContent = 'Continuar';
        document.querySelector('#reservas').appendChild(boton);
        boton.addEventListener('click', () => {
            window.location.href = '../index.html';
        })
    });
        
}
const mensajesAlUsuario = (mensaje, error) => {
    const limpiaMensaje = document.querySelector('p').textContent = '';
    
    const div = document.querySelector('#reservas');
    const p = document.createElement('p');
    p.textContent = mensaje;
    div.appendChild(p);
    if (error) {
        p.style.color = 'red';
    } else {
        p.style.color = 'green';
    }
    
    document.querySelector('p').style.fontSize = '20px';
    document.querySelector('p').style.textAlign = 'center';
    document.querySelector('p').style.padding = '20px';
    }
 const calculoFecha = (fecha, hora, tipo) => {
    if (tipo === 'Hora') {
        return `${fecha} a las ${parseInt(hora.split(':')[0]) + 1 + ':' + hora.split(':')[1]} `;
    } else if (tipo === 'Diario') {
        return `${parseInt(fecha.split('-')[2]) + 1}/${fecha.split('-')[1]}/${fecha.split('-')[0]} a las ${hora}`;
    } else if (tipo === 'Semanal') {
        return `${parseInt(fecha.split('-')[2]) + 7}/${fecha.split('-')[1]}/${fecha.split('-')[0]} a las ${hora}`;
    } else if (tipo === 'Mensual') {
        return `${fecha.split('-')[2]}/${parseInt(fecha.split('-')[1]) + 1 }/${fecha.split('-')[0] + 1} a las ${hora}`;
    } else if (tipo === 'Anual') {
        return `${fecha.split('-')[2]}/${fecha.split('-')[1]}/${parseInt(fecha.split('-')[0]) + 1} a las ${hora}`;
    } 
}


document.addEventListener('DOMContentLoaded', () => {
    validarReserva();
});
