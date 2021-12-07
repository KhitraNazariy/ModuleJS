// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     document.getElementById('text').style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.getElementById('btn');
// button.onclick = function () {
//     button.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.forms.checkName;
// form.onsubmit = function (e) {
//     e.preventDefault();
//     if (this.age.value > 18) {
//         console.log('Вам більше ніж 18 років');
//     } else if (this.age.value < 18) {
//         console.log('Вам менше ніж 18 років')
//     } else {
//         console.log('Вам 18 років')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    this.classList.toggle('hide');
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let arr = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem 2', body:'lorem ipsum dolo'},
    {title : 'lorem 3', body:'lorem ipsum sit ameti dolo sit ameti'},
    {title : 'lorem 4', body:'lorem ipsum dolo ameti'}
];

for (const item of arr) {

    let div = document.createElement('div');

    let h2Title = document.createElement('h2');
    h2Title.innerText = item.title;

    let divComm = document.createElement('div');
    divComm.classList.add('comment');
    divComm.innerText = item.body;

    let btn = document.createElement('button');
    btn.innerText = 'Згорнути';

    btn.onclick = function () {
        divComm.classList.toggle('hide-comment');
    }

    div.append(h2Title, divComm, btn);
    document.body.appendChild(div);
}