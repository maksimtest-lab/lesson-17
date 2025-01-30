// Запросить у пользователя число и вывести его в обратном порядке. Например, для числа 1234 вывод будет 4321.
let userNumber = +prompt('Введите число:');
let reversedNumber = "";

try {
    if (isNaN(userNumber) || userNumber < 0 || userNumber % 1 !== 0) {
        throw 'Введено не натуральное число!';
    }

    while (userNumber > 0) {
        reversedNumber += userNumber % 10;
        userNumber = Math.trunc(userNumber / 10);
    }
    console.log(`Число в обратном порядке: ${reversedNumber}`);

} catch (error) {
    console.log(error);
}

