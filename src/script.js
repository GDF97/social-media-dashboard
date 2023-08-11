const btn = document.querySelector(".toggle-button");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (body.classList.contains("darkMode")) {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
  } else {
    body.classList.remove("lightMode");
    body.classList.add("darkMode");
  }
});
