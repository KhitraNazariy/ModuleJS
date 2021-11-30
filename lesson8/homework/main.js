// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//      -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

// let textOfP = document.getElementById('content').innerText;
// console.log(textOfP);

// -- отримує текст з блоку з id "rules"

// let textOfDiv = document.getElementById('rules').innerText;
// console.log(textOfDiv);

// -- замініть текст параграфа з id 'content' на будь-який інший

// let changeText = document.getElementById('content');
// changeText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, magnam.';

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let changeText = document.getElementById('rules');
// changeText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, magnam.Lorem ipsum dolor sit amet, consectetur.';

// -- змініть кожному елементу колір фону на червоний

// let redElement = document.body.children;
// for (const item of redElement) {
//     item.style.background = 'red';
// }

// -- змініть кожному елементу колір тексту на синій

// let blueColor = document.body.children;
// for (const item of redElement) {
//     item.style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let elementWithIdRules = document.getElementById('rules');
// let classList = elementWithIdRules.classList;
// console.log(classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let elementsWithClassFcRules = document.getElementsByClassName('fc_rules');
for (const item of elementsWithClassFcRules) {
    item.style.color = 'red';
}
