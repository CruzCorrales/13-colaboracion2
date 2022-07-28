const carlos = document.querySelector(".carlos")


function ColorTexto(){
    const respuestaUsuario = prompt("Elige tu color") 
    document.body.style.backgroundColor=respuestaUsuario
    let parrafo =document.createElement("p")
    parrafo.innerHTML = prompt("Introduce la palabra")
    carlos.append(parrafo)
}





carlos.addEventListener("click",ColorTexto)




