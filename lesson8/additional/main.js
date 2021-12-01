// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let newArr = [];
function allClass(startElement) {
    if (startElement.children.length) {
        for (const item of startElement.children) {
            allClass(item)
        }
    }
    if (startElement.classList.length) {
        for (const element of startElement.classList) {
            newArr.push(element);
        }
    }
}

allClass(document.body);
console.log(newArr);