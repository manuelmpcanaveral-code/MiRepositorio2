// Función para mostrar la noticia al hacer clic en el botón
function mostrarNoticia(deporte) {
    let mensaje = '';
    if (deporte === 'futbol') {
        mensaje = 'Última noticia de Fútbol: El equipo X ganó 3-1 en la final.';
    } else if (deporte === 'baloncesto') {
        mensaje = 'Última noticia de Baloncesto: El jugador Y rompió el récord de puntos.';
    } else if (deporte === 'tenis') {
        mensaje = 'Última noticia de Tenis: El jugador Z ganó el torneo de Wimbledon.';
    }
    
    alert(mensaje);
}
