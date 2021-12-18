// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.forms.f1;

form.onsubmit = function () {
    let productName = this.name.value;
    let productNumber = this.number.value;
    let productPrice = this.price.value;
    let productImg = this.img.value;
    let product = {productName, productNumber, productPrice, productImg};
    let products = JSON.parse(localStorage.getItem('products', product)) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}
