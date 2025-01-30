// Вывести первые n чисел последовательности Фибоначчи, где n задает пользователь.
const userNumber = +prompt('Введите количество чисел Фибоначчи: ');
let prev = 0, next = 1;
console.log(prev);

for (let i = 1; i < userNumber; i++) {
    let temp = prev + next;
    console.log(next);
    prev = next;
    next = temp;
}
