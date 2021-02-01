// variables
const objetoImg = document.querySelector('#imagen')
const botonAvanzar = document.querySelector('#avanzar')
const botonRetroceder = document.querySelector('#retroceder')
const templateCirculo = document.querySelector('#templateCirculos').content.firstElementChild;
const circulos = document.querySelector('#circulos')
const botonParar = document.querySelector('#parar')
const botonAutoPlay = document.querySelector('#autoplay')
let intervalo = null
const tiempoIntervaloSeg = 1;
const imagenes = ['img/1.jpg', 'img/2.jfif', 'img/3.jfif']
let pagina = 1;

// functions

function activarAutoPlay() {
    intervalo = setInterval(function (){
        avanzarFoto();
    }, tiempoIntervaloSeg * 1000)
}

function desactivarAutoPlay() {
    clearInterval(intervalo);
    intervalo = null
}

function cambiarPagina (nuevaPagina) {
    pagina = nuevaPagina;
    render();
}

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
    // Imagen
    objetoImg.setAttribute('src', imagenes[pagina - 1])
    // Circulitos
    circulos.textContent = ''
    imagenes.forEach(function(imagen, indice) {
        const nuevoCirculo = templateCirculo.cloneNode(true);
        nuevoCirculo.addEventListener('click', function() {
            cambiarPagina(indice + 1)
        });
        // Marcamos el que coincide con la pagina
        if(pagina - 1 === indice){
            nuevoCirculo.setAttribute('checked', true)
        }
        // Mostramos
        circulos.appendChild(nuevoCirculo)
    })
}

// eventos
botonAvanzar.addEventListener('click', avanzarFoto)
botonRetroceder.addEventListener('click', retrocederFoto)
botonAutoPlay.addEventListener('click', activarAutoPlay)
botonParar.addEventListener('click', desactivarAutoPlay)
// botonParar.addEventListener('click', )
// inicio
render();