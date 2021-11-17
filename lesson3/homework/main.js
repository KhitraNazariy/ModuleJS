// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrayNum = [3,54,7,12,3.4];
// let arrayStr = ['string', 'string', 'string', 'string', 'string'];
// let array = [2, true, 'string', false, 'string'];
// console.log(arrayNum);
// console.log(arrayStr);
// console.log(array);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// array[3] = 4;
// array[4] = 5;
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (i = 0; i < 10; i++) {
//     document.write('<div>Text</div>');
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Text${i}</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// i = 0;
// while (i < 20) {
//     document.write('<h1>Text</h1>');
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// i = 0;
// while (i < 20) {
//     document.write(`<h1>Text${i}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [3, 32, 5, 65, 2, 555, 123, 4, 5, 6];
// for (let number of array) {
//     console.log(number);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array = ['string1', 'string2', 'string3', 'string4', 'string5', 'string6', 'string7', 'string8', 'string9', 'string10'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = [2, true, 'string', false, 'string', 23, true, 'string', 444, false];
// i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = [2, true, 'string', false, 'string', 23, true, 'string', 444, false];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         console.log(array[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [2, true, 'string1', false, 'string2', 23, true, 'string3', 444, false];
// for (let arrayElement of array) {
//     if (typeof arrayElement === "number") {
//         console.log(arrayElement);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [2, true, 'string1', false, 'string2', 23, true, 'string3', 444, false];
// i = 0;
// while (i < array.length) {
//     if (typeof array[i] === "string") {
//         console.log(array[i]);
//     }
//     i++;
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = 'text';
// array[1] = 111;
// array[2] = true;
// array[3] = {name: 'vasya'};
// array[4] = '222';
// array[5] = 333;
// array[6] = false;
// array[7] = 'text';
// array[8] = [1.2,33,3];
// array[9] = 'text';
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<h1>${i}</h1>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h1>${i}</h1>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<h1>${i}</h1>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }