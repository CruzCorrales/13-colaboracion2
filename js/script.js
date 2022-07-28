const carlos = document.querySelector(".carlos")
let color = document.getElementById("color")
let color2="detente ladron!";
let angelo = document.querySelector(".angelo")
let fondo = document.querySelector("div")

function ColorTexto(){
  const respuestaUsuario = prompt("Elige tu color") 
  document.body.style.backgroundColor=respuestaUsuario
  let parrafo =document.createElement("p")
  parrafo.style.color = "blue"
  parrafo.innerHTML = prompt("Introduce la palabra")
  carlos.after(parrafo)
}
function cambio(){
  
  if(fondo.style.backgroundColor == "red") {
    fondo.style.backgroundColor="blue";
  }else{
    fondo.style.backgroundColor = "red";
  }   
}
function cambiarColor(){
  color.innerHTML = color2
}

carlos.addEventListener("click",ColorTexto);
angelo.addEventListener("click",cambio);
angelo.addEventListener("click",cambiarColor);