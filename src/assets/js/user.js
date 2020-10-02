const cards = document.querySelectorAll("#card");
const questions = document.querySelectorAll(".term .term-header");
const termCcontent = document.querySelectorAll(".term .term-content");
console.log(questions);
cards.forEach((card) =>
  card.addEventListener("mouseover", function () {
    card.style.cursor = "pointer";
  })
);
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
  })
);
function removeResponse() {
  termCcontent.forEach((question) => (question.style.display = "none"));
}
