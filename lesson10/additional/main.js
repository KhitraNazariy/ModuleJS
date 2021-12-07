// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//     console.log(`Назва тегу ${e.target.localName}, список класів: ${e.target.classList}, список id: ${e.target.id}, розмір: ${e.target.clientHeight}px * ${e.target.clientWidth}px.`)
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = function (e) {
    let div = document.createElement('div');

    div.style.position = 'absolute';
    div.style.left = '30%';
    div.style.top = '10%';
    div.style.width = '200px';
    div.style.padding = '10px';
    div.style.boxShadow = '0 0 10px #ccc';
    div.style.backgroundColor = 'black';
    div.style.color = 'white';

    div.innerText = `Назва тегу ${e.target.localName}, список класів: ${e.target.classList}, список id: ${e.target.id}, розмір: ${e.target.clientHeight}px * ${e.target.clientWidth}px.`;

    document.body.append(div);
}


// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// let f1 = document.forms.f1;
//
// f1.status.onclick = function () {
//     if (this.checked) {
//         let filterArr = usersWithAddress.filter(value => !value.status);
//         for (const item of filterArr) {
//             let div = document.createElement('div');
//             div.innerText = `Юзер з id - ${item.id} має статус false`;
//             document.body.append(div);
//         }
//     }
// }
//
// f1.age.onclick = function () {
//     let filterAge = usersWithAddress.filter(value => value.age >= 29)
//     for (const item of filterAge) {
//         let divAge = document.createElement('div');
//         divAge.innerText = `${item.name} проходить віковий діапазон`;
//         document.body.append(divAge);
//     }
// }
//
// f1.city.onclick = function () {
//     let filterCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//     for (const item of filterCity) {
//         let divCity = document.createElement('div');
//         divCity.innerText = `${item.name} проживає у місті ${item.address.city}`;
//         document.body.append(divCity);
//     }
// }