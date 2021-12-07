// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let wrapOne = document.createElement('div');
// wrapOne.innerText = 'Form 1';
// document.body.append(wrapOne);
//
// let wrapTwo = document.createElement('div');
// wrapTwo.innerText = 'Form 2';
// document.body.append(wrapTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'f1');
// wrapOne.append(formOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'f2');
// wrapTwo.append(formTwo);
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'input1');
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'input2');
//
// formOne.append(inputOne, inputTwo);
//
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name', 'input3');
//
// let inputFour = document.createElement('input');
// inputFour.setAttribute('name', 'input4');
//
// formTwo.append(inputThree, inputFour);
//
// let btn = document.createElement('button');
// btn.innerText = 'ТИЦЯЙ';
// document.body.append(btn);
//
// btn.addEventListener('click', function () {
//     console.log(inputOne.value);
//     console.log(inputTwo.value);
//     console.log(inputThree.value);
//     console.log(inputFour.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let inputOne = document.createElement('input');
inputOne.setAttribute('name', 'input1');

let inputTwo = document.createElement('input');
inputTwo.setAttribute('name', 'input2');

let inputThree = document.createElement('input');
inputThree.setAttribute('name', 'input3');

let btn = document.createElement('button');
btn.innerText = 'Створити табличку';

btn.addEventListener('click', function () {
    let row = inputOne.value;
    let col = inputTwo.value;
    let content = inputThree.value;
    console.log(content);
    let table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
            let td = document.createElement('td');
            tr.append(td);
            td.innerText = content;
        }
        table.append(tr)
    }
    document.body.append(table);
})

document.body.append(inputOne, inputTwo, inputThree, btn);

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arr = ['дідько', 'халепа', 'дурбелик'];
// let input = document.createElement('input');
// input.setAttribute('type','text');
//
// let btn = document.createElement('button');
// btn.innerText = 'Перевірити';
//
// btn.onclick = function () {
//     for (const item of arr) {
//         if (item === input.value) {
//             alert('Стри, де так можна!');
//             input.value = '';
//             return;
//         }
//     }
//     if (input.value) {
//         alert('Нарешті нормальне слово, молодець!');
//         input.value = '';
//     }
// }
// document.body.append(input, btn);



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let arr = ['дідько', 'халепа', 'дурбелик'];
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
//
// let btn = document.createElement('button');
// btn.innerText = 'Перевірити';
//
// btn.onclick = function () {
//     for (const item of arr) {
//         if (input.value.includes(item)) {
//             alert('Містить погане слово');
//             input.value = '';
//             return;
//         }
//     }
//     if (input.value) {
//         alert('Не містить поганих слів');
//         input.value = '';
//     }
// }
//
//
// document.body.append(input, btn);