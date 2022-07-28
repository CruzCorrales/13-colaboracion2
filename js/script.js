const carlos = document.querySelector(".carlos")


function ColorTexto(){
    const respuestaUsuario = prompt("Elige tu color") 
    document.body.style.backgroundColor=respuestaUsuario
    let parrafo =document.createElement("p")
    parrafo.style.color = "blue"
    parrafo.innerHTML = prompt("Introduce la palabra")
    carlos.append(parrafo)

}





carlos.addEventListener("click",ColorTexto)


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
