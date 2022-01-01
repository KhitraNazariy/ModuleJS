fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const user of users) {

            let userDiv = document.createElement('div');
            userDiv.classList.add('user_card');

            let btn = document.createElement('button');
            btn.innerText = 'User Details';
            btn.classList.add('btn_user');
            btn.onclick = () => window.location = `user-details/user-details.html?user_id=${user.id}`;

            userDiv.innerHTML = `
                <div class="user_title">
                    <h2>id - ${user.id}</h2>
                    <h2>name - ${user.name}</h2>
                </div>`;

            userDiv.append(btn);
            wrap.append(userDiv);
        }
        document.body.append(wrap);
    })