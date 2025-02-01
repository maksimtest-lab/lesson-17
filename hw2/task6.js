// Напишите код, который просит пользователя ввести число от 1 до 10 и выводит его факториал.

const userNumber = +prompt('Введите число от 1 до 10:');

if (userNumber >= 1 && userNumber <= 10) {
    for (let i = 1; i <= userNumber; i++) {
        let factorial = 1;

        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        console.log(`Факториал числа ${i} равен ${factorial}`);

    }
} else {
    console.log('Введено некорректное значение!');
}