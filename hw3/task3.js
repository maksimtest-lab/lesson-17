let i = 0;
outerLoop: while (i < 3) {
    let j = 0;
    innerLoop: while (j < 5) {
        let k = 0;
        do {
            k++;
            if (k == 3) {
                console.log(`Сработало условие продолжаем внешний цикл. Переменная i=${i}, переменная j=${j}, переменная k=${k}`);
                i++;
                break outerLoop;
            }
            if (j == 3) {
                console.log(`Сработало условие продолжаем средний цикл. Переменная i=${i}, переменная j=${j}, переменная k=${k}`);
                j++;
                continue innerLoop;
            }
            console.log(`Внутренняя переменная k=${k}, средняя переменная j=${j}, внешняя переменная i=${i}`);
        } while (k < 5);
        j++;
    }
    console.log(`Увидим это?`);
}
