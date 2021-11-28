// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм         двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volumeEngine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeEngine = volumeEngine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//            if (typeof this[key] !== "function") {
//                console.log(`${key} - ${this[key]}`);
//            }
//         }
//     }
//     this.increaseMaxSpeed = function (newValue) {
//         this.maxSpeed = maxSpeed + newValue;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('Audi A4', 'Audi', 2016, 270, 2.0);
// car.drive();
// car.info();
// car.increaseMaxSpeed(30);
// car.changeYear(2017);
// car.addDriver('Vasya');
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine
    }

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info = function () {
        for (const key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear = function (newValue) {
        this.year = newValue;
    }
    addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('Audi A4', 'Audi', 2016, 270, 2.0);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2018);
car.addDriver('Vasya');
console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let arrCin = [
//     new Cinderella('liza', 20, 35),
//     new Cinderella('vika', 21, 36),
//     new Cinderella('masha', 23, 38),
//     new Cinderella('roksa', 22, 36),
//     new Cinderella('nata', 19, 34),
//     new Cinderella('alina', 21, 35),
//     new Cinderella('olay', 18, 38),
//     new Cinderella('oksana', 18, 37),
//     new Cinderella('diana', 20, 38),
//     new Cinderella('andriana', 24, 34)
// ];
//
// class Prince {
//     constructor(name, age, findShoe) {
//         this.name = name;
//         this.age = age;
//         this.findShoe = findShoe;
//     }
// }
//
// let prince = new Prince('Vasya', 23, 37);
//
// for (let i = 0; i < arrCin.length; i++) {
//     const cinderella = arrCin[i];
//     if (cinderella.size === prince.findShoe) {
//         console.log(cinderella);
//     }
// }
//
// let findCinderella = arrCin.find((value) => value.size === prince.findShoe)
// console.log(findCinderella);