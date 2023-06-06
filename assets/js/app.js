const actualizarContador = () => {

    const fechaObjetivo = new Date("August 30, 2023 00:00:00").getTime();
    const fechaActual = new Date().getTime();

    let diferencia = fechaObjetivo - fechaActual;

    // Cálculos para obtener días, horas, minutos y segundos restantes
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en los elementos correspondientes
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    // Si la fecha objetivo ha pasado, mostrar un mensaje de finalización
    if (diferencia < 0) {
      document.getElementById("contador").innerHTML = "El contador ha finalizado";
    }
}

setInterval(actualizarContador, 1000);





// Función para reproducir el video seleccionado
const reproducirVideo = (url) => {
    let reproductor = document.getElementById("reproductor");
    reproductor.innerHTML = '<iframe width="100%" height="100%" src="' + url + '" frameborder="0" allowfullscreen></iframe>';
}

// Precargar y reproducir el primer video al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    let primerVideo = document.querySelector(".video-thumbnail:first-child");
    let urlPrimerVideo = primerVideo.dataset.url;
    reproducirVideo(urlPrimerVideo);
});

document.addEventListener("DOMContentLoaded", function () {
    let videos = document.getElementsByClassName("video-thumbnail");
    for (let i = 0; i < videos.length; i++) {
        videos[i].addEventListener("click", function () {
            let url = this.dataset.url;
            reproducirVideo(url);
        });
    }
});