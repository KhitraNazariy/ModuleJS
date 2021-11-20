// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     s = a * b;
//     return s;
// }
// let result = area(2, 3);
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function area(r) {
//     s = 3.14 * r**2;
//     return s;
// }
// let result = area(10);
// console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function area(h, r) {
//     s = 2 * 3.14 * r * (h + r);
//     return s;
// }
// let result = area(15, 5);
// console.log(result);

// - створити функцію яка приймає масив та виводить кожен його елемент

// function singleElement(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// singleElement([12, 32, 12, 43, 12]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUl(text) {
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
// createUl('fsdfdsf');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUl(text, size) {
//     document.write('<ul>');
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
// createUl('adsdda', 20);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrayList(array) {
//     document.write('<ul>');
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write('</ul>');
// }
// arrayList([21, true, 'dada', 2, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [{id: 1, name: 'vasya', age: 21}, {id: 2, name: 'petya', age: 20}, {id: 3, name: 'kolya', age: 22}];
function printUser(array) {
    for (let arrayElement of array) {
        document.write(`<div>${arrayElement.id}. ${arrayElement.name} ${arrayElement.age}</div>`);
    }
}
printUser(array);