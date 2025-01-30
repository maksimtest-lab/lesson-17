// Написать три программы, которые считают сумму чисел от 1 до n, используя for, while и do...while. Сравнить их результаты.
const userNumber = +prompt('Введите число:');

try {
    if (isNaN(userNumber) || userNumber < 0 || userNumber % 1 !== 0) {
        throw 'Введено не натуральное число!';
    }
    let sumFor = 0;
    for (let i = 1; i <= userNumber; i++) {
        sumFor += i;
    }

    let sumWhile = 0;
    let i = 1;
    while (i <= userNumber) {
        sumWhile += i;
        i++;
    }

    let sumDoWhile = 0;
    i = 0;
    do {
        i++;
        sumDoWhile += i;
    } while (i <= userNumber);

    console.log(`Сумма чисел от 1 до ${userNumber} через for: ${sumFor}`);
    console.log(`Сумма чисел от 1 до ${userNumber} через while: ${sumWhile}`);
    console.log(`Сумма чисел от 1 до ${userNumber} через do...while: ${sumDoWhile}`);

} catch (error) {
    console.log(error);
}