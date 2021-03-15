const div = document.querySelector(".container");
const input = div.querySelector("input");

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  console.log("Click ON");
  input.focus();
});

input.addEventListener("focus", () => {
  input.classList.add("focused");
  input.setAttribute("placeholder", "통합검색");
});

input.addEventListener("blur", () => {
  input.classList.remove("focused");
  input.setAttribute("placeholder", "");
});
