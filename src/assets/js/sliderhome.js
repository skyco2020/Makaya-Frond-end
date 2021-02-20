// Variable para la llamada de jquery
var $;
var media = document.getElementsByTagName("video")[1];
const videoShowCase = document.getElementsByTagName("video")[0];
videoShowCase.muted = true;
$(document).ready(function () {
  $(".newmodal").modal();
});
const peliculas = document.querySelectorAll(".pelicula");

document.querySelector(".fa-volume-up").addEventListener("click", () => {
  console.log(videoShowCase);
  $(".fa-volume-up").toggle();
  $(".fa-volume-mute").toggle();
  videoShowCase.muted = true;
  // videoShowCase.play();
});
document.querySelector(".fa-volume-mute").addEventListener("click", () => {
  console.log(videoShowCase);
  $(".fa-volume-up").toggle();
  $(".fa-volume-mute").toggle();
  // videoShowCase.pause();
  videoShowCase.muted = false;
});
peliculas.forEach((pel) => {
  pel.addEventListener("mouseover", function () {
    // pel.lastChild.classList.add("show-action");
    // pel.style.zIndex = "1";
    // console.log(this.previousElementSibling.classList);
    // this.previousElementSibling.style.display = "block";
    // this.previousElementSibling.style.transform = "scale(1.3)";
    // this.firstChild.style.display = "block";
    console.log(this.parentElement.previousElementSibling);
    document.querySelectorAll(".modal-film").forEach((p) => {
      if (p.classList.contains("film-active")) {
        console.log("encontra la clase active");
        p.classList.remove("film-active");
        p.firstChild.firstChild.pause();
        p.classList.add("film-not-active");
      }
    });

    this.parentElement.previousElementSibling.classList.remove(
      "film-not-active"
    );
    this.parentElement.previousElementSibling.classList.add("film-active");
    // this.parentElement.previousElementSibling.firstChild.firstChild.play();

    this.parentElement.previousElementSibling.addEventListener(
      "mouseout",
      () => {
        this.parentElement.previousElementSibling.firstChild.firstChild.pause();
        this.parentElement.previousElementSibling.classList.remove(
          "film-active"
        );

        this.parentElement.previousElementSibling.classList.add(
          "film-not-active"
        );
      }
    );

    // this.firstChild.style.transform = "scale(1.3)";
    // pel.style.display = "none";

    // pel.firstChild.firstChild.play();
    // pel.querySelector(".fa-play").onclick = () => {
    //   let url = this.firstChild.firstChild.firstChild.getAttribute("src");
    //   let modal = document.querySelector("#modal1");
    //   let video = modal.querySelector("#video-principal-modal");
    //   $(video).attr("src", url);
    //   $("#modal1").modal("open");
    // };
  });
});
peliculas.forEach((pel) => {
  // pel.addEventListener("mouseout", function () {
  // this.firstChild.style.display = "none";
  //   console.log(this.parentElement.previousElementSibling);
  //   this.parentElement.previousElementSibling.style.display = "none";
  //   this.parentElement.previousElementSibling.firstChild.firstChild.pause();
  // this.firstChild.style.display = "none";
  // this.firstChild.style.transform = "scale(1.3)";
  // document.body.style.zIndex = 1;
  // this.firstChild.style.zIndex = 999999;
  // this.style.display = "flex";
  // $(".newmodal").removeClass("fade open modal");
  // $(".header").css("overflow", "visible");
  // debugger;
  // $("#exampleModal").removeClass("open");
  // this.firstChild.firstChild.pause();
  // console.log("sale");
  // });
});
//ocultar el div action
// function deleteShowAction() {
//   peliculas.forEach((p) => {
//     p.lastChild.classList.remove("show-action");
//   });
// }
// let close = document.querySelector(".modal-close");
// let modal = document.querySelector("#modal1");
// document.querySelector(".btn-play-principal").onclick = () => {
//   let vp = document.querySelector("#video-principal").getAttribute("src");
//   let modal = document.querySelector("#modal1");
//   let video = modal.querySelector("#video-principal-modal");
//   $(video).attr("src", vp);
//   $("#modal1").modal("open");
// };

// Volumen
// let currentTime = false;
// $(".fa-fast-forward").on("click", function () {
//   media.currentTime += 10;
//   media.play();
//   currentTime = true;
// });
// $(".fa-fast-backward").on("click", function () {
//   media.currentTime -= 10;
//   media.play();
//   currentTime = true;
// });
// $(".fa-volume-up").on("click", () => {
//   $(".fa-volume-up").toggle();
//   $(".fa-volume-mute").toggle();
//   $("#volume").val(0);
//   $(media).prop("volume", 0);
//   // media.play();
//   currentTime = true;
// });
// $(".fa-volume-mute").on("click", () => {
//   $(".fa-volume-up").toggle();
//   $(".fa-volume-mute").toggle();
//   $("#volume").val(110);
//   $(media).prop("volume", 1);
//   // media.play();
//   currentTime = true;
// });

// $(".fa-minus").on("click", function () {
//   let val = parseInt($("#volume").val());
//   debugger;
//   if (val === 0) {
//     $("#volume").val(0);
//     $(media).prop("volume", 0);
//   } else if (val <= 100) {
//     $("#volume").val(parseInt($("#volume").val()) - 10);
//     $(media).prop("volume", parseInt($("#volume").val()) / 100);
//   }

// media.play();
//   currentTime = true;
// });

// $(".fa-plus").on("click", function () {
//   let val = parseInt($("#volume").val());
//   debugger;
//   if (val === 100) {
//     $("#volume").val(100);
//     $(media).prop("volume", 1);
//   } else if (val >= 0) {
//     $("#volume").val(parseInt($("#volume").val()) + 10);
//     $(media).prop("volume", parseInt($("#volume").val()) / 100);
//   }
//   // media.play();
//   currentTime = true;
// });

// $("#volume").on("change", function () {
//   let val = $("#volume").val();
//   $(media).prop("volume", val / 100);
//   currentTime = true;
// });

// let ispause = false;
// $("#modal1").on("click", function () {
//   if (currentTime) {
//     currentTime = false;
//     return;
//   }
//   if (!ispause) {
//     media.pause();
//     ispause = true;
//     document.querySelector(".play-modal").style.display = "block";
//     document.querySelector(".stop-modal").style.display = "none";
//   } else {
//     media.play();
//     ispause = false;
//     document.querySelector(".play-modal").style.display = "none";
//     document.querySelector(".stop-modal").style.display = "block";
//   }
// });
// const peliculass = document.querySelectorAll(".pelicula");
// const btnLeft = document.querySelector(".flecha-izquierda");
// const btnRight = document.querySelector(".flecha-derecha");
// const carrousel = document.querySelector(".carrousel");
// btnLeft.addEventListener("click", () => {
//   carrousel.scrollLeft -= carrousel.offsetWidth;
//   console.log(12);
// });
// btnRight.addEventListener("click", () => {
//   console.log(12);
//   carrousel.scrollLeft += carrousel.offsetWidth;
// });

// Modal preview

// $("#exampleModal").on("mouseover",function(){
//   $("#exampleModal").modal('show');
// })
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
$(".film-active").on("click", function () {
  console.log("sale del film");
});
