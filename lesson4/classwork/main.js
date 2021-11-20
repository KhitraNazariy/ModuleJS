// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNum(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// minNum(2, 3,1);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNum(a, b ,c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else console.log(c);
// }
// maxNum(12, 2, 32);

// - створити функцію яка повертає найбільше число з масиву

// let listNumber = [32, 2, 4, 21, 3, 2222];
// function maxNum(array) {
//     let number = array[0]
//     for (const item of array) {
//         if (item > number) {
//             number = item;
//         }
//     }
//     return number;
// }
// let maxItem = maxNum(listNumber);
// console.log(maxItem);

// - створити функцію яка повертає найменьше число з масиву

// let listNumber = [32, 2, 4, 21, 3, 2222];
// function minNum(array) {
//     let number = array[0];
//     for (const item of array) {
//         if (item < number) {
//             number = item;
//         }
//     }
//     return number;
// }
// let result = minNum(listNumber);
// console.log(result);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbersArray = [2, 4, 3, 1];
// function sumator(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
// let result = sumator(numbersArray);
// console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numbersArray = [2, 4, 3, 1];
// function arithmeticMean(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item
//     }
//     return sum / array.length;
// }
// let result = arithmeticMean(numbersArray);
// console.log(result);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let array = [34,43,32,3,2,4,2,1,555]
// function minAndMax(numbers) {
//     max = numbers[0];
//     min = numbers[0]
//     for (const number of numbers) {
//         if (number > numbers[0]) {
//             max = number;
//         }
//         if (number < numbers[0]) {
//             min = number
//         }
//     }
//     console.log(max);
//     return min;
// }
// let result = minAndMax(array);
// console.log(result);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
// function random(array, size) {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr
// }
// let result = random(arr, 10);
// console.log(result);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
// function randomNum(array, limit) {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * limit)
//     }
//     return arr;
// }
// let result = randomNum(arr, 9999);
// console.log(result);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arr = [1, 2, 3];
function reverse(array) {
    let newArr = [];
    for (let i = array.length-1; i >= 0; i--) {
        const arrayElement = array[i];
        newArr.push(arrayElement);
    }
    return newArr;
}
let result = reverse(arr);
console.log(result);