const angelo = document.querySelector(".angelo")
const dago = document.querySelector(".dago")
const cruz = document.querySelector(".cruz")
const carlos = document.querySelector(".carlos")


function cambiarColor(){
    const respuestaUsuario = prompt("Elige tu color") 
    document.body.style.backgroundColor=respuestaUsuario
}

function crearTexto(){
let parrafo =document.createElement("p")
parrafo.innerHTML = "Repaso general"
dago.append(parrafo)
}



angelo.addEventListener("click",cambiarColor)
dago.addEventListener("click",crearTexto)
cruz.addEventListener("click",cambiarColor)
carlos.addEventListener("click",crearTexto)




