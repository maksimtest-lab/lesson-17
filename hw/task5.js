// Найти все простые числа в диапазоне от 1 до 100.
for (let i = 2; i < 100; i++) {
    let isPrime = true;
    for (let i2 = 2; i2 < i; i2++) {
        if (i % i2 === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
