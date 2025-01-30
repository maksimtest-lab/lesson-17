// Программа загадывает случайное число от 1 до 100. Пользователь должен угадать число, вводя свои варианты. Программа подсказывает: "меньше" или "больше".

const randomNumber = Math.floor(Math.random() * 100);
let userGuess;

do {
    userGuess = +prompt('Угадайте число от 1 до 100:');

    if (userGuess < randomNumber) {
        console.log('Больше');
    } else if (userGuess > randomNumber) {
        console.log('Меньше');
    } else if (userGuess === randomNumber) {
        console.log('Поздравляем! Вы угадали число.');
    }

} while (userGuess !== randomNumber);

