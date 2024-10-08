async function loadMedia() {
    try {
        const response = await fetch('media.json');
        const data = await response.json();
        console.log(data);

        
        // Obtener un elemento aleatorio del array
        const randomMedia = data.media[Math.floor(Math.random() * data.media.length)];

        const container = document.getElementById('imagenesPin');
        container.innerHTML = ''; // Limpiar el contenedor

        if (randomMedia.type === 'iframe') {
            const iframe = document.createElement('iframe');
            iframe.src = randomMedia.url;
            iframe.scrolling = "yes";
            container.appendChild(iframe);
        }
        
    } catch (error) {
        console.error('Error al cargar los medios:', error);
    }
}

// Cargar medios al iniciar
loadMedia();
