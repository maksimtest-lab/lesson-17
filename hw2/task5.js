// Напишите код, который просит пользователя ввести number - число от 1 до 10. И выводит в консоль квадрат каждого числа от number до 1.

const userNumber = +prompt('Введите число от 1 до 10:');

if (userNumber >= 1 && userNumber <= 10) {
    for (let i = 1; i <= userNumber; i++) {
        console.log(i * i);
    }
} else {
    console.log('Введено некорректное значение!');
}