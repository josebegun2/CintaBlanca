// alert('Hola')
// Variables
// Numericas
var numero = 10;
// String
var nombre = 'Adriana';
// Boolean
var verdadero = true ; // false

// operadores aritmeticos
// Object

var num1 = 200
var num2 = 300
var sum = num1 + num2
var saludo = 'Hola'

console.log(sum)
console.log(nombre)
console.log(verdadero)
console.log('Hola desde la consola')

// concatenar
console.log(saludo + ' ' + nombre)

// var pregunta = prompt('Ingresa tu nombre')
// console.log(pregunta)

// Challenge 1
// Preguntar al usuario su nombre, telefono y direccion y mostrarlo en la consola
var name = prompt('Ingresa tu nombre')
var number = prompt('Ingresa tu telefono')
var direccion = prompt('Ingresa tu direccion')

console.log('El nombre del usuario es ' + name + ', su numero es ' + number + ' y su direccion es ' + direccion)

// Challenge 2
// Pregunta al usuario su año de nacimiento y mostrar en consola que edad debe de tener este año
var year = prompt('Ingresa tu año de nacimiento')
var age = 2020 - year

console.log('La edad del usuario es ' + age)

console.log(typeof(age))

// number() o parseInt - cambia de string a numerico.
