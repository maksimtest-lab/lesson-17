// Симметричное дерево
// Построить симметричное "дерево" из символов * высотой nnn, где nnn вводит пользователь.
// Например:

//    *
//   ***
//  *****

const userNumber = +prompt('Введите число:');

try {
    if (isNaN(userNumber) || userNumber < 0 || userNumber % 1 !== 0) {
        throw 'Введено не натуральное число!';
    }

    let line = '';

    for (let i = userNumber; i >= 1; i--) {
        let start = 1;
        let end = userNumber;

        while (start <= end) {
            line += start <= i ? ' ' : '*';
            start++;
        }
        while (end > i) {
            line += '*';
            end--;
        }
        while (end >= 1) {
            line += end < i ? ' ' : '*';
            end--;
        }

        line += "\n";
    }
    console.log(line);

} catch (error) {
    console.log(error);
}
