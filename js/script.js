const angelo = document.querySelector(".angelo")
const dago = document.querySelector(".dago")
const cruz = document.querySelector(".cruz")
const carlos = document.querySelector(".carlos")


function ColorTexto(){
    const respuestaUsuario = prompt("Elige tu color") 
    document.body.style.backgroundColor=respuestaUsuario
    let parrafo =document.createElement("p")
    parrafo.innerHTML = "Repaso general"
    dago.append(parrafo)
}





carlos.addEventListener("click",ColorTexto)




