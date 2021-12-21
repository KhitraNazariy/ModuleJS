// function wakeUp(isWorkingDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 resolve('Here we go again');
//             }
//             reject('Go to bad');
//         }, 500);
//     });
// }
//
// function goToShower(isHotWater) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isHotWater) {
//                 resolve('Go to shower');
//             }
//             reject('Wait for hot water');
//         }, 300);
//     });
// }
//
// function goEat(isThereFood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isThereFood) {
//                 resolve('Bon appetit');
//             }
//             reject('Go to cooking');
//         }, 1000);
//     });
// }
//
// function goWork() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Work Work Work');
//         }, 3000);
//     });
// }
//
// function goSleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('HHHHHHHHHHHHHH');
//         }, 2000);
//     });
// }
//
// wakeUp(true)
//     .then(morn => {
//         console.log(morn);
//
//         return goToShower(true);
//     })
//     .then(shower => {
//         console.log(shower);
//
//         return goEat(true);
//     })
//     .then(eat => {
//         console.log(eat);
//
//         return goWork();
//     })
//     .then(work => {
//         console.log(work);
//
//         return goEat(true);
//     })
//     .then(eat => {
//         console.log(eat);
//
//         return goSleep();
//     })
//     .then(sleep => {
//         console.log(sleep);
//     })
//     .catch(reason => {
//         console.log('EROOOOR', reason);
//     });

// ------------------------------------------------------------

// function wakeUp(isWorkingDay, cb) {
//     setTimeout(() => {
//         if (isWorkingDay) {
//             cb(null, 'GOOD Morning');
//             return
//         }
//         cb('Go to bad');
//     }, 500);
// }
//
// function goToShower(isHotWater, cb) {
//     setTimeout(() => {
//         if(isHotWater) {
//             cb(null, 'Go to shower');
//             return
//         }
//         cb('Wait for hot water');
//     }, 300);
// }
//
// function goEat(isThereFood, cb) {
//     setTimeout(() => {
//         if (isThereFood) {
//             cb(null, 'Bon appetit');
//             return
//         }
//         cb('Go to cooking');
//     }, 1000);
// }
//
// function goWork(cb) {
//     setTimeout(() => {
//         cb(null, 'Work Work Work');
//     }, 3000);
// }
//
// function goSleep(cb) {
//     setTimeout(() => {
//         cb(null, 'HHHHHHHHHHHHHH');
//     }, 2000);
// }
//
// wakeUp(true, (err, morning) => {
//     if (err) {
//         console.error('OOOPS', err);
//         return
//     }
//     console.log(morning);
//
//     goToShower(true, (err, shower) => {
//         if (err) {
//             console.error('OOOPS', err);
//             return
//         }
//         console.log(shower);
//
//         goEat(true, (err, food) => {
//             if (err) {
//                 console.error('OOOPS', err);
//                 return
//             }
//             console.log(food);
//
//             goWork((err, work) => {
//                 if (err) {
//                     console.error('OOOPS', err);
//                     return
//                 }
//                 console.log(work);
//
//                 goEat(true, (err, food) => {
//                     if (err) {
//                         console.error('OOOPS', err);
//                         return
//                     }
//                     console.log(food);
//
//                     goSleep((err, sleep) => {
//                         if (err) {
//                             console.error('OOOPS', err);
//                             return
//                         }
//                         console.log(sleep);
//                     })
//                 })
//             })
//         })
//     })
// })

// ------------------------------------------------------------

function wakeUp(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                resolve('Here we go again');
            }
            reject('Go to bad');
        }, 500);
    });
}

function goToShower(isHotWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isHotWater) {
                resolve('Go to shower');
            }
            reject('Wait for hot water');
        }, 300);
    });
}

function goEat(isThereFood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isThereFood) {
                resolve('Bon appetit');
            }
            reject('Go to cooking');
        }, 1000);
    });
}

function goWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Work Work Work');
        }, 3000);
    });
}

function goSleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('HHHHHHHHHHHHHH');
        }, 2000);
    });
}

async function myDay() {
    let morning = await wakeUp(true);
    let shower = await goToShower(true);
    let eat = await goEat(true);
    let work = await goWork();
    let eat2 = await goEat(true);
    let sleep = await goSleep();

    console.log(morning, 'morning');
    console.log(shower, 'shower');
    console.log(eat, 'eat');
    console.log(work, 'work');
    console.log(eat2, 'eat2');
    console.log(sleep, 'sleep');
}

myDay();