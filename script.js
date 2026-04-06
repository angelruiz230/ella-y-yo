// Función para el botón interactivo
function mostrarMensaje() {
    const msj = document.getElementById('mensaje-oculto');
    msj.classList.toggle('show');
}

// Lógica para contar los días (Ajusta la fecha a la suya)
const fechaInicio = new Date('2024-11-22'); // Año-Mes-Día

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;
    
    // Convertir milisegundos a días
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    document.getElementById('contador').innerText = `Llevamos ${dias} días creando recuerdos juntos.`;
}

// Ejecutar al cargar
actualizarContador();
