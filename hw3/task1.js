let breakOuter = false;
for (let i = 0; i < 10; i++) {
    if (breakOuter) {
        break;
    }
    for (let j = 0; j < 10; j++) {
        if (j === 5) {
            breakOuter = true;
            break;
        }
        console.log(`${i} ${j}`);
    }
}
