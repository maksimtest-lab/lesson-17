let i = 0;
outerLoop: while (i < 2) {
    let j = 0;
    while (j < 5) {
        j++;
        if (j == 3) {
            console.log(`Сработало условие продолжаем внешний цикл. Переменная i=${i}, переменная j=${j}`);
            i++;
            continue outerLoop;
        }
        console.log(`Внутренняя переменная j=${j}, внешняя переменная i=${i}`);
    }
    console.log(`Увидим это?`);
}

