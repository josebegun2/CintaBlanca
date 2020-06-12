// Piedra Papel o Tijera
// 2 jugadores

var answer1 = prompt('Jugador 1 - piedra, papel o tijera?')
var answer2 = prompt('Jugador 2 - piedra, papel o tijera?')

if(answer1 == answer2){
 console.log('Empate')
} else if(answer1 == 'piedra' && answer2 == 'tijera' || answer1 == 'tijera' && answer2 == 'papel' || answer1 == 'papel' && answer2 == 'piedra' ){
    console.log('Gana jugador 1')
} else if(answer2 == 'piedra' && answer1 == 'tijera' || answer2 == 'tijera' && answer1 == 'papel' || answer2 == 'papel' && answer1 == 'piedra' ){
    console.log('Gana jugador 2')
} else {
    console.error('Hay un error en los inputs')
}