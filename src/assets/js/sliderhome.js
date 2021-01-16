// Variable para la llamada de jquery
var $;
var media = document.getElementsByTagName("video")[1];
console.log(media);
// const fila = document.querySelector(".contenedor-principal");
const peliculas = document.querySelectorAll(
  ".peliculas-recomendadas .product-item"
);

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
    pel.querySelector(".fa-play").onclick = () => {
      let url = this.firstChild.firstChild.firstChild.getAttribute("src");
      let modal = document.querySelector("#modal1");
      let video = modal.querySelector("#video-principal-modal");
      $(video).attr("src", url);
      $("#modal1").modal("open");
    };
  });
});
peliculas.forEach((pel) => {
  pel.addEventListener("mouseout", function () {
    this.lastChild.classList.remove("show-action");
    this.firstChild.firstChild.pause();
    pel.style.transform = "scale(1)";
  });
});
//ocultar el div action
function deleteShowAction() {
  peliculas.forEach((p) => {
    p.lastChild.classList.remove("show-action");
  });
}
let close = document.querySelector(".modal-close");
let modal = document.querySelector("#modal1");
document.querySelector(".btn-play-principal").onclick = () => {
  let vp = document.querySelector("#video-principal").getAttribute("src");
  let modal = document.querySelector("#modal1");
  let video = modal.querySelector("#video-principal-modal");
  $(video).attr("src", vp);
  $("#modal1").modal("open");
};

// Volumen
let currentTime = false;
$(".fa-fast-forward").on("click", function () {
  media.currentTime += 10;
  media.play();
  currentTime = true;
});
$(".fa-fast-backward").on("click", function () {
  media.currentTime -= 10;
  media.play();
  currentTime = true;
});
$(".fa-volume-up").on("click", () => {
  $(".fa-volume-up").toggle();
  $(".fa-volume-mute").toggle();
  $("#volume").val(0);
  $(media).prop("volume", 0);
  // media.play();
  currentTime = true;
});
$(".fa-volume-mute").on("click", () => {
  $(".fa-volume-up").toggle();
  $(".fa-volume-mute").toggle();
  $("#volume").val(110);
  $(media).prop("volume", 1);
  // media.play();
  currentTime = true;
});

$(".fa-minus").on("click", function () {
  let val = parseInt($("#volume").val());
  debugger;
  if (val === 0) {
    $("#volume").val(0);
    $(media).prop("volume", 0);
  } else if (val <= 100) {
    $("#volume").val(parseInt($("#volume").val()) - 10);
    $(media).prop("volume", parseInt($("#volume").val()) / 100);
  }

  // media.play();
  currentTime = true;
});

$(".fa-plus").on("click", function () {
  let val = parseInt($("#volume").val());
  debugger;
  if (val === 100) {
    $("#volume").val(100);
    $(media).prop("volume", 1);
  } else if (val >= 0) {
    $("#volume").val(parseInt($("#volume").val()) + 10);
    $(media).prop("volume", parseInt($("#volume").val()) / 100);
  }
  // media.play();
  currentTime = true;
});

$("#volume").on("change", function () {
  let val = $("#volume").val();
  $(media).prop("volume", val / 100);
  currentTime = true;
});

let ispause = false;
$("#modal1").on("click", function () {
  if (currentTime) {
    currentTime = false;
    return;
  }
  if (!ispause) {
    media.pause();
    ispause = true;
    document.querySelector(".play-modal").style.display = "block";
    document.querySelector(".stop-modal").style.display = "none";
  } else {
    media.play();
    ispause = false;
    document.querySelector(".play-modal").style.display = "none";
    document.querySelector(".stop-modal").style.display = "block";
  }
});
