const btnCruz = document.querySelector(".cruz");
const divCruz = document.querySelector(".divCruz");

function ocultarDiv  (){
    divCruz.style.display = "none";
}
function redondeaBtn  (){
    divCruz.classList.add("redondeo");
}
btnCruz.addEventListener("click", ocultarDiv);
divCruz.addEventListener("mouseOn", redondeaBtn);
