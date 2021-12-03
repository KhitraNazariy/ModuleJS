// Все робити за допомоги js.
// - створити блок,

let div = document.createElement('div');
div.innerText = 'div';

// - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.background = 'silver';
div.style.color = 'red';
div.style.fontSize = '30px';

// - додати цей блок в body.

document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.

let divClone = div.cloneNode(true);
document.body.appendChild(divClone);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main','Products','About us','Contacts'];
let ulList = document.getElementsByClassName('menu')[0];
for (const item of array) {
    let liElement = document.createElement('li');
    liElement.innerText = item;
    ulList.appendChild(liElement);
}


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = `${item.title} - ${item.monthDuration}`;
//     document.body.appendChild(div);
// }



// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = item.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration;

    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}