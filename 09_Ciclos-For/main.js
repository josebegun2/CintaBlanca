
// Estructura

// for(inico; limite; secuencia){
// }

// for(let i =0; i<= 10; i++){
//     console.log(i)
//     console.log('Hola')
// }

// for(let i =0; i>=-200; i=i-5){
//     console.log(i)
// }


// for(let i =500; i>= 0; i=i-10){
//     console.log(i)
// }

// for(let i =-500; i <= 0; i=i+50){
//     console.log(i)
// }



for(i =1; i<=100; i++){
    var name = ''
    if(i%3==0  &  i%5==0){
        name = 'FizzBuzz'
    } else if (i%3==0) {
        name = 'Fizz'
    } else if (i%5==0) {
        name = 'Buzz'
    } 
    console.log(i + ' ' + name)
}