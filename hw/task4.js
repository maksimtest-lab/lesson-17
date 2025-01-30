// Вывести таблицу умножения для числа, введенного пользователем.
const userNumber = +prompt('Введите число:');

for (let i = 1; i <= 10; i++) {
    console.log(`${userNumber} x ${i} = ${userNumber * i}`);
}

// Сформировать и вывести таблицу умножения от 1 до 10.
for (let i = 1; i < 10; i++) {
    for (let i2 = 1; i2 < 10; i2++) {
        console.log(`${i} x ${i2} = ${i * i2}`)
    }
}