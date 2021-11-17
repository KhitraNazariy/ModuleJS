// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let array = [];
// let a = 0;
// for (let i = 0; i < 50; i++) {
//     array[i] = a;
//         a += 2;
// }
// console.log(array);

// b. заповнити його 50 непарними числами за допомоги циклу.

// let array = [];
// let a = 1;
// for (let i = 0; i < 50; i++) {
//     array[i] = a;
//     a += 2;
// }
// console.log(array);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * i);
// }
// console.log(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * 732) + 8;
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен
// let array = [644, 93, 64, 551, 728, 249, 294, 72, 422, 457, 335, 324, 355, 455, 695, 433, 359, 578, 339, 693];
// for (let i = 0; i < array.length; i += 3) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let array = [644, 93, 64, 551, 728, 249, 294, 72, 422, 457, 335, 324, 355, 455, 695, 433, 359, 578, 339, 693];
// for (let i = 0; i < array.length; i +=3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let array = [644, 93, 64, 551, 728, 249, 294, 72, 422, 457, 335, 324, 355, 455, 695, 433, 359, 578, 339, 693];
// let newArr = [];
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         newArr.push(array[i]);
//     }
// }
// console.log(newArr);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i-1]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array = [100,250,50,168,120,345,188];
// let chek = 0;
// for (let i = 0; i < array.length; i++) {
//      chek +=array[i] / array.length;
// }
// console.log(chek);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [644, 93, 64, 551, 728, 249, 294, 72, 422, 457];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i] * 5;
//     newArray.push(arrayElement);
// }
// console.log(newArray);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array = [111, 'text', true, false, 123, 21, 'text', 3, true, 13];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array = [644, 93, 64, 551, 728, 249, 294, 72, 422, 457];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [644, 93, 64, 551, 728, 249, 294, 72, 422, 457];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i]);
// }
// console.log(newArray);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let word = [];
// for (let i = 0; i < array.length; i++) {
//     word += array[i];
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let word = [];
// i = 0;
// while (i < array.length) {
//     word += array[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let word = [];
// for (const string of array) {
//     word +=string;
// }
// console.log(word);
