const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");

const filaRomantic = document.querySelector(".Romantic");
const peliculasRomantic = document.querySelectorAll(".pelicula");

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

const flechaIzquierdaRomantic = document.getElementById(
  "flecha-izquierdaRomantic"
);
const flechaDerechaRomantic = document.getElementById("flecha-derechaRomantic");

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha derecha Romantic. ----- -----
flechaDerechaRomantic.addEventListener("click", () => {
  filaRomantic.scrollLeft += filaRomantic.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda Romantic. ----- -----
flechaIzquierdaRomantic.addEventListener("click", () => {
  filaRomantic.scrollLeft -= filaRomantic.offsetWidth;
});

// ? ----- ----- Paginacion ----- -----
// const numeroPaginas = Math.ceil(peliculas.length / 5);
// for (let i = 0; i < numeroPaginas; i++) {
//     const indicador = document.createElement('button');

//     if (i === 0) {
//         indicador.classList.add('activo');
//     }

//     document.querySelector('.indicadores').appendChild(indicador);
//     indicador.addEventListener('click', (e) => {
//         debugger;
//         fila.scrollLeft = i * fila.offsetWidth;

//         document.querySelector('.indicadores .activo').classList.remove('activo');
//         e.target.classList.add('activo');
//     });
// }

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});

fila.addEventListener("mouseleave", () => {
  peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
});

const cards = document.querySelectorAll("#card");
cards.forEach((card) =>
  card.addEventListener("mouseover", function () {
    card.style.cursor = "pointer";
  })
);

peliculas.forEach((pel) => {
  pel.addEventListener("mouseover", function () {});
});
function deleteDisplay() {
  peliculas.forEach((p) => {
    p.style.border = "none";
  });
}
