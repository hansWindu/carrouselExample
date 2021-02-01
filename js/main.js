// variables
const objetoImg = document.querySelector('#imagen')
const botonAvanzar = document.querySelector('#avanzar')
const botonRetroceder = document.querySelector('#retroceder')
const imagenes = ['img/1.jpg', 'img/2.jfif', 'img/3.jfif']
let pagina = 1;

// functions

function avanzarFoto() {
    pagina = pagina + 1;
    if (imagenes.length + 1 <= pagina) {
        pagina = 1
    }
    render();
}

function retrocederFoto() {
    pagina = pagina - 1;
    if (0 === pagina){
        pagina = imagenes.length
    }
    render();
}

function render() {
    objetoImg.setAttribute('src', imagenes[pagina - 1])
}

// eventos
botonAvanzar.addEventListener('click', avanzarFoto)
botonRetroceder.addEventListener('click', retrocederFoto)
// inicio
render();