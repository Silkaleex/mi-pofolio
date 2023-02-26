'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// //Ambos son iguales pero son diferentes formas de ponerlo

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const x = function () {
//   console.log(23);
// };

// Challenge 1
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';

    //When Player wins
  } else if (guess === secrectNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = secrectNumber;

    document.querySelector('body').style.backgroundColor = '#84a98c';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when Guess is too high
  } else if (guess > secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏫  Too High!';
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏬  Too Low!';
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Star guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
////////////////////////////////////
// Desafío de codificación n. ° 1
// ¡Implementa una función de reinicio del juego,
//  para que el jugador pueda hacer una nueva suposición!
// Tus tareas:
// 1. Seleccione el elemento con la clase "again"
//    y adjunte un controlador de eventos de clic.
// 2. En la función del controlador, restaure los valores iniciales
//    de la 'puntuación' y variables 'secretNumber'
// 3. Restaure las condiciones iniciales del mensaje,
//    el número, la puntuación y la entrada de adivinanzas en los campos.
// 4. También restaure el color de fondo original
//    (# 222) y el ancho del número (15rem).
