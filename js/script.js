const btnDago = document.querySelector('.dago')

console.log(btnDago)

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

btnDago.addEventListener('click', cambiarColor)
btnDago.addEventListener('click', cargarImagen)