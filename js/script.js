const btnDago = document.querySelector('.dago')
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
function cambiarColor(){
    document.body.style.backgroundColor = 'rgb(193, 193, 246)'
}
function cargarImagen(){
    const mainDago = document.querySelector('.main')
    const div = document.createElement('div');
    div.innerHTML = '<img src="./img/programar.jpg">'
    div.className = 'img'
    mainDago.append(div)
}

carlos.addEventListener("click",ColorTexto);
angelo.addEventListener("click",cambio);
angelo.addEventListener("click",cambiarColor);
btnDago.addEventListener('click', cambiarColor)
btnDago.addEventListener('click', cargarImagen)
