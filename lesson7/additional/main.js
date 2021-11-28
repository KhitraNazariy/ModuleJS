// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function User(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, geoLat, geoIng, phone, website, companyName, companyCathPhrase, companyBs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street: addressStreet,
//         suite: addressSuite,
//         city: addressCity,
//         zipcode: addressZipcode,
//         geo: {
//             lat: geoLat,
//             ing: geoIng,
//         }
//     }
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         name: companyName,
//         catchPhrase: companyCathPhrase,
//         bs: companyBs
//     }
// }
//
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org','Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class DescriptionTag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs
    }
}

let a = new DescriptionTag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{
    titleOfAttr: 'accesskey',
    actionOfArr: 'Активация ссылки с помощью комбинации клавиш'
},
    {titleOfAttr: 'coords', actionOfArr: 'Устанавливает координаты активной области'}]);
console.log(a);

let div = new DescriptionTag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{
    titleOfAttr: 'align',
    actionOfArr: 'Задает выравнивание содержимого тега <div>.'
},
    {titleOfAttr: 'title', actionOfArr: 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log(div);

let h1 = new DescriptionTag('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.', [{
    titleOfAttr: 'align',
    actionOfArr: 'Определяет выравнивание заголовка.'
}]);
console.log(h1);

let span = new DescriptionTag('span', 'Тег <span> предназначен для определения строчных элементов документа.', [{
    titleOfAttr: 'accesskey',
    actionOfArr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
}, {
    titleOfAttr: 'class',
    actionOfArr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
}]);
console.log(span);

let input = new DescriptionTag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{
    titleOfAttr: 'accept',
    actionOfArr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
}, {
    titleOfAttr: 'form',
    actionOfArr: 'Связывает поле с формой по её идентификатору.'
}]);
console.log(input);

let form = new DescriptionTag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [{
    titleOfAttr: 'action',
    actionOfArr: 'Адрес программы или документа, который обрабатывает данные формы.'
}, {
    titleOfAttr: 'name',
    actionOfArr: 'Имя формы.'
}]);
console.log(form);

let option = new DescriptionTag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{
    titleOfAttr: 'disabled',
    actionOfArr: 'Заблокировать для доступа элемент списка.'
}, {
    titleOfAttr: 'label',
    actionOfArr: 'Указание метки пункта списка.'
}]);
console.log(option);

let select = new DescriptionTag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [{
    titleOfAttr: 'autofocus',
    actionOfArr: 'Устанавливает, что список получает фокус после загрузки страницы.'
}, {
    titleOfAttr: 'disabled',
    actionOfArr: 'Блокирует доступ и изменение элемента.'
}]);
console.log(select);