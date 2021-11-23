// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let sRect = (a, b) => a * b;
// console.log(sRect(4,5));

// - створити функцію яка обчислює та повертає площу кола

// let sCircle = (r) => Math.PI * r**2;
// console.log(sCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру

// let sCyl = (r, h) => 2 * Math.PI * r * (h + r);
// console.log(sCyl(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let logElement = (arr) => {
//     for (const item of arr) {
//         console.log(item);
//         document.write(`<h1>${item}</h1>`);
//     }
// }
// logElement([1,2,3,1,3]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let parText = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// parText('Hello Okten');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listUl = (text) => {
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
// listUl('Text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let listUl = (text, size) => {
//     document.write('<ul>');
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
// listUl('Text', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrList = (arr) => {
//     document.write('<ul>');
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write('</ul>');
// }
// arrList([1, 34, true, 'text', false, 2, 'text']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [
    {id: 1, name: 'kolya', age: 20},
    {id: 2, name: 'vasya', age: 21},
    {id: 3, name: 'olya', age: 22}
]

let arrElement = (arr) => {
    for (const item of arr) {
        document.write(`<div>${item.id}. ${item.name} - ${item.age}</div>`)
    }
}
arrElement(array);
