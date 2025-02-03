// Напишите код, который просит пользователя ввести количество строк - значение lines (нечётное число от 1 до 9). Ему в консоль выводится пирамидка следующей структуры:

// ******#******
// *****###*****
// ****#####****
// ***#######***
// *###########*
// ***#######***
// ****#####****
// *****###*****
// ******#******

// Высота пирамидки определяется значением lines. Реши эту задачу с помощью любого цикла.

const lines = +prompt('Введите количество строк (нечётное число от 1 до 9):');
const symbol = '#';
let result = '';
if (lines % 2 === 0) {
    console.log('Введено чётное число!');

} else if (lines >= 1 || lines <= 9) {

    // Первая часть
    for (let i = 1; i <= lines; i++) {
        let start = lines + 1, end = 1;
        while (start >= 1) {
            result += start > i ? '*' : symbol;
            start--;
        }

        start = lines + 1, end = 1;
        while (end < start) {
            result += end >= i ? '*' : symbol;
            end++;
        }
        result += "\n";
    }

    if (lines > 1) {
        // Зеркальная часть
        for (let i = lines - 1; i > 0; i--) {
            let start = lines + 1, end = 1;
            while (start >= 1) {
                result += start > i ? '*' : symbol;
                start--;
            }

            start = lines + 1, end = 1;
            while (end < start) {
                result += end >= i ? '*' : symbol;
                end++;
            }
            result += "\n";
        }
    }
    console.log(result);

} else {
    console.log('Введено некорректное число!');
}
