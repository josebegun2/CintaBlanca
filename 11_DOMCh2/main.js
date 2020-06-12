let PNombre = document.getElementById('PNombre')
let PDireccion = document.getElementById('PDireccion')
let PTelefono = document.getElementById('PTelefono')
let PPinia = document.getElementById('PPinia')

console.log(PNombre.value)


let RNombre = document.getElementById('RNombre')
let RDireccion = document.getElementById('RDireccion')
let RTelefono = document.getElementById('RTelefono')
let RPinia = document.getElementById('RPinia')

let Tarjeta = document.getElementById('Tarjeta')
let Boton = document.getElementById('Boton')

const Captura = () => {
    RNombre.innerHTML = PNombre.value
    RDireccion.innerHTML = PDireccion.value
    RTelefono.innerHTML = PTelefono.value
    
    console.log(PNombre.value)
    let RPiniaIMG = PPinia.value.toLowerCase()
    console.log(RPiniaIMG)
    if(RPiniaIMG === 'sin'){
        RPinia.src = "https://www.dominospizza.es/images/salsaTomate_thumb.png"
    } else if (RPiniaIMG === 'con'){
        RPinia.src = "https://www.cicciopizza.es/wp-content/uploads/2018/12/tropicana_pizza.png"
    } else {
        RPinia.src = "https://get2knowweb.files.wordpress.com/2016/06/bad-pizza.jpg?w=590"
    }

    card.classList.remove('none')
}

Boton.addEventListener('click',Captura)