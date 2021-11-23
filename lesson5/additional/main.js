// - Дано натуральное число n. Выведите все числа от 1 до n.

// let allNumbers = (n) => {
//     let numbers = [];
//     for (let i = 1; i < n; i++) {
//          numbers.push(i);
//     }
//     return numbers;
// }
// console.log(allNumbers(10));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let orderOfNumbers = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
// orderOfNumbers(20, 101);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let array =[9,8,0,4];
// let fn = (arr, i) => {
//     for (let j = 0; j < arr.length; j++) {
//         if (i === j) {
//             let item = arr[j];
//             arr[j] = arr[i + 1];
//             arr[i +1] = item
//         }
//     }
//     return arr;
// }
// console.log(fn(array, 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let numbers = [1,0,6,0,3];
let zeroEnd = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item === 0) {

        }
    }
    return arr;
}
console.log(zeroEnd(numbers));