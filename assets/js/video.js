function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
        document.body.style.backgroundColor = '#fff';
    } else {
        medio.play();
        play.value = '||';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
}

//Recogemos id de span para volumen
let volumen = document.getElementById("volumen");

volumen.innerText = "100%";

function accionReiniciar() {
    //Usar propiedad .currentTime
    medio.currentTime = 0;

    //Reproducir el vídeo
    medio.play();

    //Cambiar el valor del botón a ||
    play.value = '||';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';


}

function accionRetrasar() {
    //Usar propiedad .curentTime
    //Contemplar que no existen valores negativos   
    if (medio.currenTime < 5) {
        medio.currentTime = 0;
    } else {
        medio.currentTime = medio.currentTime - 5;
    }
}

function accionAdelantar() {
    //Contemplar que no existen valores mayores a medio.duration
    if (medio.currentTime == medio.duration) {
        medio.currentTime = medio.duration;
    } else {
        medio.currentTime = medio.currentTime + 5;
    }
}

function accionSilenciar() {
    //Utilizar medio.muted = true; o medio.muted = false;
    if (medio.muted == false) {
        medio.muted = true;
        silenciar.value = 'ESCUCHAR';
    } else {
        medio.muted = false;
        silenciar.value = 'SILENCIAR';
    }
}

function accionMasVolumen() {
    //Contemplar que el valor máximo de volumen es 1
    if (medio.volume < 1) {
        medio.volume += 0.1;
        silenciar.value = 'SILENCIAR';

    } else {
        medio.volume = 1;
    }
    volumen.innerText = Math.round(medio.volume * 100) + "%";
}

function accionMenosVolumen() {
    //Contemplar que el valor mínimo de volumen es 0
    if (medio.volume > 0.01) {
        medio.volume -= 0.1;

    } else {
        silenciar.value = 'ESCUCHAR';

    }
    volumen.innerText = Math.round(medio.volume * 100) + "%";
}

function iniciar() {

    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);