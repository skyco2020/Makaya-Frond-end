const cards = document.querySelectorAll("#card");
const questions = document.querySelectorAll(".term .term-header");
const termCcontent = document.querySelectorAll(".term .term-content");
console.log(questions);
cards.forEach((card) =>
  card.addEventListener("mouseover", function () {
    card.style.cursor = "pointer";
  })
);
bandera = 0;
questions.forEach((question) =>
  question.addEventListener("click", function () {
    // console.log(this.nextElementSibling);  select the next brother element
    console.log(this.nextElementSibling.style.display);
    if (this.nextElementSibling.style.display === "block") {
      this.nextElementSibling.style.display = "none";
    } else {
      removeResponse();
      this.nextElementSibling.style.display = "block";
    }
    // removeResponse();
    // console.log(this.nextElementSibling.style.display);
    // if (this.nextElementSibling.style.display === "block") {
    //   this.nextElementSibling.style.display = "none";
    // } else {
    //   this.nextElementSibling.style.display = "block";
    // }
    // this.nextElementSibling.style.display = "block";

    // console.logthis.nextElementSibling.style.display;

    // if (bandera === 0) {
    //   console.log(1);
    //   this.nextElementSibling.style.display = "block";
    //   bandera = 1;
    // } else if (bandera === 1) {
    //   console.log(0);
    //   this.nextElementSibling.style.display = "none";
    //   bandera = 0;
    // }
  })
);
function removeResponse() {
  termCcontent.forEach((question) => (question.style.display = "none"));
}
