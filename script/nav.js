const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", buttonNav);

function buttonNav() {
  console.log("click !");
  if (button.classList.contains("rotate")) {
    console.log("On enlève la classe : rotate");
    button.classList.remove("rotate");
  } else {
    button.classList.add("rotate");
    // button.textContent = "X";
    console.log("On ajoute la classe : rotate");
  }
}
