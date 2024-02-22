// On veut que lorsqu'on clique sur le bouton menu, 
//il tourne de 90degré et déplie un menu navigateur
// s'il est ouvert le = devient X

const button = document.querySelector(".buttonNav");
console.log(button);

button.addEventListener('click', buttonNav);

function buttonNav() {
    console.log("click !");
    if (button.classList = "") {
        button.classList.add("rotate");
        console.log("On ajoute la classe : rotate");
    } else {
        button.classList.remove("rotate");
        console.log("On retire la classe : rotate");
    }
}
