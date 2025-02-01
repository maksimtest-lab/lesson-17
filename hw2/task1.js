// Напишите код, который просит пользователя ввести число number от 1 до 10 и выводит в консоль числа от 1 до number.

const userNumber = +prompt('Введите число от 1 до 10:');

if (userNumber >= 1 && userNumber <= 10) {
    for (let i = 1; i <= userNumber; i++) {
        console.log(i);
    }
} else {
    console.log('Введено некорректное значение!');
}
