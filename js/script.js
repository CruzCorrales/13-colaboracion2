const btnDago = document.querySelector('.dago')
console.log(btnDago)

function cambiarColor(){
    document.body.style.backgroundColor = 'rgb(193, 193, 246)'
}
function cargarImagen(){
    const div = document.createElement('div');
    div.innerHTML = '<img src="./img/tecnologia2.jpg">'
    div.className = 'img'
    document.body.append(div)
}


btnDago.addEventListener('click', cambiarColor)
btnDago.addEventListener('click', cargarImagen)