let angelo = document.querySelector(".angelo")
let fondo = document.querySelector("div")

function cambio(){

    if(fondo.style.backgroundColor == "red") {
        fondo.style.backgroundColor="blue";
    }else{
        fondo.style.backgroundColor = "red";
    }   
}

angelo.addEventListener("click",cambio)

let color = document.getElementById("color")
let color2="detente ladron!";

function cambiarColor(){
    color.innerHTML = color2
}