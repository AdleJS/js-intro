const button = document.querySelector("button");
const input = document.querySelector("input");
const div = document.querySelector("div");

button.addEventListener("click", (event) => {
  console.log("Clicked");
  event.stopPropagation();
});

input.addEventListener("input", () => {
  console.log("log");
});

div.addEventListener("click", () => {
  console.log("div clicked");
});
