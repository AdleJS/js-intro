const header = document.querySelector("#main-header");
header.textContent = "Welcome!";

const paragrpahs = document.querySelectorAll(".text");

paragrpahs.forEach((item, index) => {
  item.style.color = "blue";

  if (index == 2) {
    item.style.visibility = "hidden";
  }
});

const inputs = document.querySelectorAll(".required");

inputs.forEach((item) => {
  item.style.border = "2px solid";
});
