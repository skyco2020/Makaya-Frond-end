const videoShowCase = document.getElementsByTagName("video")[0];
videoShowCase.muted = true;
console.log(videoShowCase);

document.querySelector("#icon-search-menu").addEventListener("click", () => {
  document.querySelector(".search-box").classList.toggle("active");
});

document.querySelector(".notifications").addEventListener("mouseover", () => {
  document.querySelector(".notifications-box").style.display = "block";
});

document.querySelector(".notifications").addEventListener("mouseout", () => {
  document.querySelector(".notifications-box").style.display = "none";
});

document.querySelector(".volume-up-principal").addEventListener("click", () => {
  console.log(videoShowCase);
  $(".fa-volume-up").toggle();
  $(".fa-volume-mute").toggle();
  videoShowCase.muted = true;
  // videoShowCase.play();
});

document
  .querySelector(".volume-mute-principal")
  .addEventListener("click", () => {
    console.log(videoShowCase);
    $(".fa-volume-up").toggle();
    $(".fa-volume-mute").toggle();
    // videoShowCase.pause();
    videoShowCase.muted = false;
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
