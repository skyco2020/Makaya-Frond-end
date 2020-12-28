var $;
var media = document.getElementsByTagName('video')[1];
// const fila = document.querySelector(".contenedor-principal");
const peliculas = document.querySelectorAll(
  ".peliculas-recomendadas .product-item"
);
// console.log("la confe");
// const filaRomantic = document.querySelector(".Romantic");
// const peliculasRomantic = document.querySelectorAll(".pelicula");

// const flechaIzquierda = document.getElementById("flecha-izquierda");
// const flechaDerecha = document.getElementById("flecha-derecha");

// const flechaIzquierdaRomantic = document.getElementById(
//   "flecha-izquierdaRomantic"
// );
// const flechaDerechaRomantic = document.getElementById("flecha-derechaRomantic");

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
// flechaDerecha.addEventListener("click", () => {
//   debugger;
//   fila.scrollLeft += fila.offsetWidth;
// });

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
// flechaIzquierda.addEventListener("click", () => {
//   debugger;
//   fila.scrollLeft -= fila.offsetWidth;
// });

// ? ----- ----- Event Listener para la flecha derecha Romantic. ----- -----
// flechaDerechaRomantic.addEventListener("click", () => {
//   filaRomantic.scrollLeft += filaRomantic.offsetWidth;
// });

// // ? ----- ----- Event Listener para la flecha izquierda Romantic. ----- -----
// flechaIzquierdaRomantic.addEventListener("click", () => {
//   filaRomantic.scrollLeft -= filaRomantic.offsetWidth;
// });

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
// peliculas.forEach((pelicula) => {
//   pelicula.addEventListener("mouseenter", (e) => {
//     const elemento = e.currentTarget;
//     setTimeout(() => {
//       peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
//       elemento.classList.add("hover");
//     }, 300);
//   });
// });

// fila.addEventListener("mouseleave", () => {
//   peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
// });

const cards = document.querySelectorAll("#card");
cards.forEach((card) =>
  card.addEventListener("mouseover", function () {
    card.style.cursor = "pointer";
  })
);
peliculas.forEach((pel) => {
  pel.addEventListener("mouseover", function () {
    // console.log(pel);
    deleteShowAction();
    pel.lastChild.classList.add("show-action");
    // pel.firstChild.firstChild.play();
    pel.querySelector(".fa-play").onclick = () => {
      let url = this.firstChild.firstChild.firstChild.getAttribute("src");
      let modal = document.querySelector("#modal1");

      let video = modal.querySelector("#video-principal-modal");
      if (video.firstChild) {
        video.firstChild.remove();
      }
      let videoNuevo = document.createElement("source");
      videoNuevo.setAttribute("src", url);
      $(video).attr("src", url);
      // video.appendChild(videoNuevo);
      console.log(video);
      debugger;
      $('#modal1').modal('open');
      // modal.style.display = "block";
      // $("#modal1").addClass("open");
      console.log(modal);
    };
    pel.firstChild.firstChild.style.height = "100%";
  });
});
peliculas.forEach((pel) => {
  pel.addEventListener("mouseout", function () {
    this.lastChild.classList.remove("show-action");
    this.firstChild.firstChild.pause();
    pel.style.transform = "scale(1)";
  });
});
function deleteShowAction() {
  peliculas.forEach((p) => {
    p.lastChild.classList.remove("show-action");
  });
}
let close = document.querySelector(".modal-close");
let modal = document.querySelector("#modal1");
document.querySelector(".btn-play-principal").onclick = () => {
  let vp = document.querySelector("#video-principal").getAttribute("src");

  console.log(close);
  let videoNuevo = document.createElement("source");
  let modal = document.querySelector("#modal1");
  let video = modal.querySelector("#video-principal-modal");
  if (video.firstChild) {
    video.firstChild.remove();
  }
  videoNuevo.setAttribute("src", vp);
  $(video).attr("src", vp);
  // video.appendChild(videoNuevo);
  $('#modal1').modal('open');
  // modal.style.display = "block";
};
close.onclick = () => {
    media.pause();  
  $("#modal1").removeClass('open');
};
// Volumen
let currentTime = false;
$(".fa-fast-forward").on("click", function(){
  media.currentTime += 10;
  media.play();
  currentTime = true;
})
$(".fa-fast-backward").on("click", function(){
  media.currentTime -= 10;
  media.play();
  currentTime = true;
})
// $(".fa-volume-up").on("click", function(){
//   let val = parseInt($("#volume").val());
//   if(val > 0){
//     $("#volume").val(parseInt($("#volume").val()) - 10);
//     $(media).prop("volume",(parseInt($("#volume").val())/100));
//   }
//   // media.play();
//   currentTime = true;
// })

$(".fa-plus,.fa-volume-up").on("click", function(){
  debugger;
  let val = parseInt($("#volume").val());
  if(val <= 0 || val < 100){
    $("#volume").val(parseInt($("#volume").val()) + 10);
    $(media).prop("volume",(parseInt($("#volume").val())/100));
  }
  // media.play();
  currentTime = true;
})

$(".fa-minus").on("click", function(){
  let val = parseInt($("#volume").val());
  debugger;
  if(val === 0)
    return;
  if(val <= 100){
    $("#volume").val(parseInt($("#volume").val()) - 10);
    $(media).prop("volume",(parseInt($("#volume").val())/100));
  }
  // media.play();
  currentTime = true;
})

$("#volume").on("change", function(){ 
  let val = $("#volume").val();
  $(media).prop("volume",(val / 100));
  currentTime = true;
})


let ispause = false;
$('#modal1').on("click", function(){
  if(currentTime){
    currentTime = false;
    return;
  }
  if(!ispause){
    media.pause();
    ispause = true;
  }  
  else{
    media.play();
    ispause = false;
  } 
})