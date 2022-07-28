const btnCruz = document.querySelector(".cruz");
const main = document.querySelector(".main");

function cambiarColor (){
    main.style.backgroundColor = "red";
}
btnCruz.addEventListener("click", cambiarColor);