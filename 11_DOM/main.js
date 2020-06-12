// getElementById busca el id de nuestro archivo HTML


let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')
let pregunta = document.getElementById('pregunta')
let respuesta = document.getElementById('respuesta')
let boton = document.getElementById('boton')

// console.log(pregunta)
// console.log(titulo)
// console.log(texto)



const cambio = () => {
  // Pinta en nuestra etiqueta el valor dado
    titulo.innerHTML = 'Titulo cambiado desde JS'
    texto.innerHTML = 'Texto cambiado desde JS'  
    respuesta.innerHTML = pregunta.value
}
// addEventListener escucha los eventos de HTML
// El primer paramtero es el EventSource
// Segundo parametro es la funcion que qeremos ejecutar
boton.addEventListener('click', cambio)