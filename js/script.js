let angelo = document.querySelector(".angelo")
let fondo = document.querySelector("div")
let parar = document.querySelector(".parar")

function cambio(){

    if(fondo.style.backgroundColor == "red") {
        fondo.style.backgroundColor="blue";
    }else{
        fondo.style.backgroundColor = "red";
    }   
}

angelo.addEventListener("click",cambio)


parar.addEventListener("click",function(){
    angelo.removeEventListener("click",cambio);
   fondo.style.backgroundColor="red"
});