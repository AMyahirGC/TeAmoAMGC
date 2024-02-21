// mensaje en la pestaña
let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = `Eres Incrible 😍.`
})

window.addEventListener('focus', () => {
    previousTitle = document.title
    document.title = `Te Amo AMGC ❤️`
})

// musica para la pagina
var musica = document.getElementById("musica");
var botonMusica = document.getElementById("boton-musica");

botonMusica.addEventListener("click", function () {
    if (musica.paused) {
        musica.play();
        this.innerHTML = "Pausar - Abrazito 🫶";
    } else {
        musica.pause();
        botonMusica.innerHTML = "Encender - Me Fasicinas 🌻";
    }
});

// efecto en el scroll de la pagina
ScrollReveal().reveal('.PrimeraSeccion');
ScrollReveal().reveal('.Detalles1_1', { delay: 200 });
ScrollReveal().reveal('.Detalles1_2', { delay: 400 });
ScrollReveal().reveal('.Detalles1_3', { delay: 600 });
ScrollReveal().reveal('.Detalles1_4', { delay: 800 });
ScrollReveal().reveal('#SegundaSeccion', { delay: 1000 });
ScrollReveal().reveal('.Detalles2_1', { delay: 1200 });
ScrollReveal().reveal('.Detalles2_2', { delay: 1400 });
ScrollReveal().reveal('.Detalles2_3', { delay: 1600 });
ScrollReveal().reveal('.Detalles2_4', { delay: 1800 });
ScrollReveal().reveal('#TerceraSeccion', { delay: 1800 });
ScrollReveal().reveal('#CuartaSeccion', { delay: 1900 });
ScrollReveal().reveal('#Cumpleaños', { delay: 2000 });