// Проверить, является ли введенное число или слово палиндромом (читается одинаково в прямом и обратном направлении).

const userInput = prompt('Введите число или слово:').toLowerCase();
let reverseUserInput = "";
for (let i = userInput.length - 1; i >= 0; i--) {
    reverseUserInput += userInput[i];
}

if (userInput == reverseUserInput) {
    console.log(`Это палиндром! ${reverseUserInput} == ${userInput}`);
} else {
    console.log(`Это не палиндром! ${reverseUserInput} != ${userInput}`);
}
