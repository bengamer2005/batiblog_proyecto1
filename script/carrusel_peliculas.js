let indiceDiapositivaActual = 0;
const diapositivas = document.querySelectorAll('.carrusel-elemento');
const tiempoIntervalo = 4000; 

function moveSlide(direccion) {
  indiceDiapositivaActual += direccion;

  if (indiceDiapositivaActual >= diapositivas.length) {
    indiceDiapositivaActual = 0;
  } else if (indiceDiapositivaActual < 0) {
    indiceDiapositivaActual = diapositivas.length - 1;
  }

  const offset = -indiceDiapositivaActual * 100;
  document.querySelector('.carrusel-cuerpo').style.transform = `translateX(${offset}%)`;
}

function avanzarAutomaticamente() {
  moveSlide(1);
}

setInterval(avanzarAutomaticamente, tiempoIntervalo);