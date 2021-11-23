// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNum = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// minNum(8,9,5);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (a, b ,c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// maxNum(5, 6, 3);

// - створити функцію яка повертає найбільше число з масиву

// let numbers = [1, 3, 2, 11, 22, 33];
// let maxNumOfArray = (arr) => {
//     let maxNumber = arr[0];
//     for (const item of arr) {
//         if (item > maxNumber) {
//             maxNumber = item;
//         }
//     }
//     return maxNumber;
// }
// console.log(maxNumOfArray(numbers));


// - створити функцію яка повертає найменьше число з масиву

// let numbers = [12, 3, 2, 11, 22, 33];
// let minNumOfArray = (arr) => {
//     let minNumber = arr[0];
//     for (const item of arr) {
//         if (item < minNumber) {
//             minNumber = item;
//         }
//     }
//     return minNumber;
// }
// console.log(minNumOfArray(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbers = [1, 2, 10];
// let sumArr = (arr) => {
//     let result = 0;
//     for (const item of arr) {
//         result += item
//     }
//     return result;
// }
// console.log(sumArr(numbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numbers = [12, 3, 2, 11, 22, 33];
// let arithMean = (arr) => {
//     let result = 0;
//     for (const item of arr) {
//         result += item
//     }
//     return result / arr.length;
// }
// console.log(arithMean(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let numbers = [12, 3, 2, 11, 22, 33, 56];
// let minAndMax = (arr) => {
//     let min = arr[0];
//     let max = arr[0];
//     for (const item of arr) {
//         if (item < min) {
//             min = item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minAndMax(numbers));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let array = [];
// let randomNumArr = (arr, size) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(randomNumArr(array, 100));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let randomNumbers = [];
// let randomNum = (arr, size, limit) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
// console.log(randomNum(randomNumbers, 100, 100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let numbers = [1, 2, 3];
let reverseArr = (arr) => {
    let reverseArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const item = arr[i];
        reverseArray.push(item);
    }
    return reverseArray;
}
console.log(reverseArr(numbers));