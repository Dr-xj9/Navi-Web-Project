function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const tiempoActual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').innerText = tiempoActual;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llama a la función una vez al cargar la página