// Напишите код, который просит пользователя ввести число m от 1 до 10 и выводит в консоль первые m чисел Фибоначчи.

const userNumber = +prompt('Введите число от 1 до 10:');

if (userNumber >= 1 && userNumber <= 10) {
    let prev = 0, next = 1;
    console.log(prev);

    for (let i = 1; i < userNumber; i++) {
        let temp = prev + next;
        console.log(next);
        prev = next;
        next = temp;
    }
} else {
    console.log('Введено некорректное значение!');
}
