
var num1 = 10

let num2 = 10


console.log(num1 + 'var')
console.log(num2 + 'let')


function saludo(){
    console.log('Hola Ricardo')
}
saludo()


const perimetro = (lado) => {
    console.log('El perimetro es ' + lado*lado)
}

perimetro(3)

const arearect = (base,altura) => {
    console.log('El area del rectangulo es ' + base*altura)
}

arearect(2,4)

const areatriang = (base,altura) => {
    console.log('El area del triangulo es ' + base*altura/2)
}

areatriang(4,2)