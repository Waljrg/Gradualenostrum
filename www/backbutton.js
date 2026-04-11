import { App } from '@capacitor/app';

// Esta función se ejecutará cada vez que toques el botón físico de atrás
App.addListener('backButton', () => {
    const rutaActual = window.location.pathname;
    
    // Si NO estamos en el index.html, volvemos a la pantalla principal
    if (!rutaActual.endsWith('index.html') && rutaActual !== '/') {
        window.location.href = 'index.html';
    } else {
        // Si ya estamos en el inicio, cerramos la aplicación
        App.exitApp();
    }
});
