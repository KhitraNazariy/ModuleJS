// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, 'vasya', 'pupkin', 'asd@gmail.com', 38092927127),
//     new User(4, 'kolya', 'dah', 'qeew@gmail.com', 380954353427),
//     new User(33, 'olya', 'bodew', 'fsfs@gmail.com', 380943543527),
//     new User(2, 'vika', 'lored', 'fff@gmail.com', 380953453427),
//     new User(5, 'dima', 'grunik', 'ddfd@gmail.com', 38092535427),
//     new User(8, 'vasya', 'pupkin', 'asd@gmail.com', 38092927127),
//     new User(10, 'kolya', 'dah', 'qeew@gmail.com', 380954353427),
//     new User(22, 'olya', 'bodew', 'fsfs@gmail.com', 380943543527),
//     new User(13, 'vika', 'lored', 'fff@gmail.com', 380953453427),
//     new User(17, 'dima', 'grunik', 'ddfd@gmail.com', 38092535427)
// ];
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUser = users.filter(value => value.id % 2 === 0);
// console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortUser = users.sort((a, b) => a.id - b.id);
// console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'vasya', 'pupkin', 'asd@gmail.com', 38092927127, ['coffe', 'cake']),
    new Client(22, 'kolya', 'dah', 'qeew@gmail.com', 380954353427, ['coffe', 'cake', 'fish']),
    new Client(4, 'olya', 'bodew', 'fsfs@gmail.com', 380943543527, ['tea']),
    new Client(5, 'vika', 'lored', 'fff@gmail.com', 380953453427, ['coffe', 'cake', 'meat']),
    new Client(9, 'dima', 'grunik', 'ddfd@gmail.com', 38092535427, ['tea', 'cake', 'hotdog', 'pizza']),
    new Client(12, 'vasya', 'pupkin', 'asd@gmail.com', 38092927127, ['cola', 'cake']),
    new Client(222, 'kolya', 'dah', 'qeew@gmail.com', 380954353427, ['coffe', 'cake', 'fish']),
    new Client(8, 'solya', 'bodew', 'fsfs@gmail.com', 380943543527, ['pepsi']),
    new Client(51, 'vika', 'eradis', 'fff@gmail.com', 380953453427, ['bear', 'meat']),
    new Client(19, 'dima', 'tolot', 'ddfd@gmail.com', 38092535427, ['coffe', 'cake', 'pizza']),
];
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);