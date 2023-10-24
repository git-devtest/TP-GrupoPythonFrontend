const validarFormulario = () => {
const formulario = document.querySelector('#formulario');
const nombreUsuario = document.querySelector('#nombre_usuario');
const email = document.querySelector('#email');
const contrasena = document.querySelector('#password');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  
  if (nombreUsuario.value === '') {
    alert('Por favor, escribe tu nombre de usuario');
    nombreUsuario.focus();
    return false;
  }
  
  if (email.value === '') {
    alert('Por favor, escribe tu correo electrónico');
    email.focus();
    return false;
  }
  
  if (password.value === '') {
    alert('Por favor, escribe tu contraseña');
    password.focus();
    return false;
  }
  
  // Validar que el email tenga un formato válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert('Por favor, escribe un correo electrónico válido');
    email.focus();
    return false;
  }
  
  alert(`Formulario enviado correctamente, se dio de alta el usuario ${nombreUsuario.value}`);
});
};
const limpiarFormulario = () => {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', function() {
        formulario.reset();
      });
};


document.addEventListener('DOMContentLoaded', () => {
    validarFormulario();
    limpiarFormulario();
});