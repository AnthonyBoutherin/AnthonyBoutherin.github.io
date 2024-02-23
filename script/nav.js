const button = document.querySelector(".buttonNav");
console.log(button);

button.addEventListener("click", buttonNav);

function buttonNav() {
  console.log("click !");
  if (button.classList === "buttonNav") {
    console.log("On ajoute la classe : rotate");
  }
}
