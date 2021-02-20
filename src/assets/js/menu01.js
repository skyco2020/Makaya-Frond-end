document.querySelector("#icon-search-menu").addEventListener("click", () => {
  if ((document.querySelector(".search-film").style.display = "none")) {
    document.querySelector(".search-film").style.display = "block";
    // document.querySelector(".search-film").style.focus;
    document.querySelector(".search-box").style.background =
      "rgba(0, 0, 0, 0.651)";
  } else if ((document.querySelector(".search-film").style.display = "block")) {
    document.querySelector(".search-film").style.display = "none";
    // document.querySelector(".search-film").style.focus;
    document.querySelector(".search-box").style.background = "transparent";
  }
});
// document.querySelector("body").addEventListener("click", (e) => {
//   console.log(e.target);
//   if (!e.target.classList.contains("icon-search-menu")) {
//     console.log("entra aca ");
//     document.querySelector(".search-film").style.display = "none";
//     document.querySelector(".search-box").style.background = "transparent";
//   }
// });
document
  .querySelector("#icon-notifications")
  .addEventListener("mouseover", () => {
    // console.log("show input");
    // document.querySelector(".search-film").toggle("setDisplayActive");
    document.querySelector(".notifications-box").style.display = "block";
  });
document
  .querySelector("#icon-notifications")
  .addEventListener("mouseout", () => {
    // console.log("show input");
    // document.querySelector(".search-film").toggle("setDisplayActive");
    document.querySelector(".notifications-box").style.display = "none";
  });
