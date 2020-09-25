const cards = document.querySelectorAll("#card");
cards.forEach((card) =>
  card.addEventListener("mouseover", function () {
    card.style.cursor = "pointer";
  })
);
