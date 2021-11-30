// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let elementWithIdMainHeader = document.getElementById('main_header');
// elementWithIdMainHeader.

// b) робить шириниу елементу ul 400px

// let ulList = document.getElementsByTagName('ul');
// ulList[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsWithClassLinkList = document.getElementsByClassName('linkList');
// for (const item of elementsWithClassLinkList) {
//     item.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let elementWithClassListElement2 = document.getElementsByClassName('listElement2');
// console.log(elementWithClassListElement2[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsLi = document.getElementsByTagName('li');
// for (const item of elementsLi) {
//     item.style.background = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsA = document.getElementsByTagName('a');
// for (const item of elementsA) {
//     item.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elementsA = document.getElementsByTagName('a');
// for (const item of elementsA) {
//     if (item.innerText === 'link3') {
//         item.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aElements = document.getElementsByTagName('a');
// for (const item of aElements) {
//     let newClass = item.innerText;
//     item.classList.add(newClass);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let color = prompt('Enter color:')
// let allElementsClassSubHeader = document.getElementsByClassName('sub-header');
// for (const item of allElementsClassSubHeader) {
//     item.style.background = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let color = prompt('Enter color');
// let allElementsClassSubHeader = document.getElementsByClassName('sub-header');
// for (const item of allElementsClassSubHeader) {
//     if (item.innerText === 'content 2 segment') {
//         item.style.color = color;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let elementWithClassContent1 = document.getElementsByClassName('content_1');
// elementWithClassContent1[0].innerText = prompt();

// l) отримати елементи p та змінити їм padding на 20px

// let pElements = document.getElementsByTagName('p');
// for (const item of pElements) {
//     item.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let elementsWithClassText2 = document.getElementsByClassName('text2');
for (const item of elementsWithClassText2) {
    item.innerText = 'sep-2021';
}