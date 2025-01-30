let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`Сумма чисел от 1 до 100: ${sum}`);

let sumOdd = 0;
for (let i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
        sumOdd += i;
    }
}
console.log(`Сумма только нечетных чисел от 1 до 50: ${sumOdd}`);

const userStart = +prompt('Введите начальное значение диапазона:');
const userEnd = +prompt('Введите конечное значение диапазона:');

let sumUser = 0;

for (let i = userStart < userEnd ? userStart : userEnd; i <= (userEnd > userStart ? userEnd : userStart); i++) {
    sumUser += i;
}
console.log(`Сумма чисел от ${userStart} до ${userEnd}: ${sumUser}`);
