let products = JSON.parse(localStorage.getItem('products'));
let wrap = document.createElement('div');
wrap.style.display = 'flex';
wrap.style.flexDirection = 'wrap';
wrap.style.columnGap = '20px';
let btn2 = document.createElement('button');
btn2.innerText = 'Видалити всі продукти';
btn2.onclick = function () {
    localStorage.clear();
}
for (const product of products) {
    let div = document.createElement('div');
    div.style.backgroundColor = '#777799';
    div.style.color = 'white';
    div.style.padding = '20px';
    div.style.borderRadius = '20px';
    let btn = document.createElement('button');
    btn.innerText = 'Видалити продукт';
    div.innerHTML = `
        <img src="${product.productImg}" width="200px">
        <h2>${product.productName}</h2>
        <p>price: ${product.productPrice}</p>
        <p>quantily: ${product.productNumber}</p>
    `;
    div.append(btn);
    wrap.append(div);
}
document.body.append(wrap, btn2);