const userNumber = +prompt('Введите число:');

try {
    if (isNaN(userNumber) || userNumber < 0 || userNumber % 1 !== 0) {
        throw 'Введено не натуральное число!';
    } else {
        let factorial = 1;
        for (let i = 1; i <= userNumber; i++) {
            factorial *= i;
        }
        console.log(`Факториал числа ${userNumber} равен ${factorial}`);
    }
} catch(error) {
    console.log(error);
}
