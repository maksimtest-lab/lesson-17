// Нарисовать с помощью звездочек: Прямоугольник.
const height = 5;
const width = 21;
let line = '';

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        line += '*';
    }
    line += "\n";

}
console.log(line);

// Нарисовать с помощью звездочек: Треугольник.
line = '';

for (let i = 1; i <= width; i++) {
    for (let j = 0; j < i; j++) {
        line += '*';
    }
    line += "\n";
}
console.log(line);
