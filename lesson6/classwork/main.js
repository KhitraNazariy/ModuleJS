// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let normalizeStr = (str) => {
//     return str
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ');
// }
// console.log(normalizeStr(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomNumbers = (size, limit) => {
//     let numbers = [];
//     for (let i = 0; i < size; i++) {
//         numbers.push(Math.round(Math.random() * limit));
//     }
//     return numbers;
// }
// console.log(randomNumbers(20, 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let sortRandomNum = () => {
//     let numbers = [];
//     for (let i = 0; i < 10; i++) {
//         numbers.push(Math.round(Math.random() * 100));
//     }
//     numbers.sort((a, b) => a - b);
//     return numbers;
// }
// console.log(sortRandomNum());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomNumbers = sortRandomNum();
// console.log(randomNumbers.filter(number => number % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers = sortRandomNum();
// console.log(numbers.map(value => value + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = (numbers, direction) => {
//     let sortNum = [];
//     if (direction === 'ascending') {
//         sortNum = numbers.sort(((a, b) => a - b));
//     } else if (direction === 'descending') {
//         sortNum = numbers.sort((a, b) => b - a);
//     }
//     return sortNum;
// }
// console.log(sortNums(nums, 'ascending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let descendingMonthDuration = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(descendingMonthDuration);
// let moreFiveMonths = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(moreFiveMonths);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let array = [];
    while (str.length) {
        array.push(str.substring(0, n));
        str = str.slice(n)
    }
    return array;
}
console.log(cutString('наслаждение', 3));