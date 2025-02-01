// С помощью цикла while выведите в консоль нечётные числа от 0 до 10.

let num = 0;

while (true) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;

    if (num > 10) {
        break;
    }
}