let favorites = JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favorites) {
    let div = document.createElement('div');

    div.innerText = `Name: ${favorite.name}, Age - ${favorite.age}, Status: ${favorite.status}`;

    document.body.append(div)
}