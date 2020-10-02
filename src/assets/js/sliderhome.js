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
  pel.addEventListener("mouseover", function () {
    deleteShowAction();
    pel.lastChild.classList.add("show-action");
    pel.firstChild.firstChild.play();
    pel.style.background = " black";
    pel.style.height = "auto";
    pel.style.transform = "scale(1.3)";
    pel.style.anaimation = "showFilms 1s";
    pel.style.borderRadius = "5px";
    pel.style.zIndex = "3";
    pel.firstChild.firstChild.style.height = "100%";
    // pel.style.position = "absolute";
    // pel.style.clip = "rect(1px,1px,1px,1px)";
    // pel.style.top = "initial";
    // pel.style.left = "initial";
    // pel.style.transform = "rotate(90)";
    // pel.style.width = "300px";
    // this.firstChild.style.width = "240px";
    // this.firstChild.firstChild.style.width = "240px";
  });
});
peliculas.forEach((pel) => {
  pel.addEventListener("mouseout", function () {
    this.lastChild.classList.remove("show-action");
    this.firstChild.firstChild.pause();
    pel.style.transform = "scale(1)";
    this.style.position = "initial";
    this.style.height = "initial";
    this.style.borderRadius = "initial";
    this.style.width = "initial";
    this.style.zIndex = "initial";
    this.style.background = "initial";
  });
});
function deleteShowAction() {
  peliculas.forEach((p) => {
    p.lastChild.classList.remove("show-action");
  });
}
