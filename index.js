// let counter = 2;

// counter = ++counter;
// console.log(counter);

// let index = 0;
// for (; index < 5; index++) {
//     console.log(index);
// }
// console.log(index);

// let num = +prompt('Введите число');
// debugger;

// for (let index = 0; index < num; index++) {
//     // console.log("*".repeat(index + 1));
//     console.log("".padEnd(index + 1, "*"));
// }

let num = +prompt('Введите число');
let result = "";

while (num > 0) {
    result += num % 10;
    console.log(num);
    console.log(num % 10);
    num = Math.trunc(num / 10);
}

console.log(Number(result));

// while (num > 0) {
// }