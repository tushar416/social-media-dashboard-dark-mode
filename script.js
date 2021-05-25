const button = document.querySelector(".switch .btn");
const darkMode = document.querySelector(".switch");
const card = document.querySelectorAll(".container");
let bol = true;
darkMode.addEventListener("click", () => {
  if (bol) {
    button.style.right = "27px";
    darkMode.classList.add("gradient");
    button.style.background = "#000";

    bol = false;
  } else {
    button.style.right = "3px";
    darkMode.classList.remove("gradient");
    button.style.background = "#fff";

    bol = true;
  }
});

darkMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  document.body.classList.toggle("bg");
  card.forEach((a) => {
    a.style.animation = "rotate 0.6s ease";

    setTimeout(() => {
      a.style.animation = "none";
    }, 700);
  });
});
