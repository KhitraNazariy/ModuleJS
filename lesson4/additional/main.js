// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function addArg(arg1, arg2) {
//     if (arguments.length === 1) {
//         console.log(arg1);
//     } else {
//         console.log(arg1 + arg2);
//     }
// }
// addArg(7, 10);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// arr1 = [1,2,3,4];
// arr2 = [2,3,4,5];
// function addArr(arr1, arr2) {
//     sumArr = [];
//     for (let i = 0, j = 0; i < arr1.length; i++, j++) {
//         sumArr.push(arr1[i]+ arr2[j]);
//     }
//     return sumArr;
// }
// console.log(addArr(arr1, arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function returnKey(array) {
//     let userKey = [];
//     for (const user of array) {
//         for (const key in user) {
//             userKey.push(key);
//         }
//     }
//     return userKey;
// }
// let keys = returnKey(users);
// console.log(keys);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function returnValue(array) {
    let userValue = [];
    for (const user of array) {
        for (const key in user) {
            userValue.push(user[key]);
        }
    }
    return userValue;
}
let value = returnValue(users);
console.log(value);
