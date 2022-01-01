let paramsString = document.location.search;
let searchParams = new URLSearchParams(paramsString);
let user_id = searchParams.get('user_id');

fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    .then(response => response.json())
    .then(user => {

        let divUserTitle = document.createElement('div');
        divUserTitle.innerText = `Detailed information about user with id - ${user.id}`;
        divUserTitle.classList.add('user-title');

        let wrapUser = document.createElement('div');
        wrapUser.classList.add('wrap-user');

        let userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <h2>id - ${user.id},  name - ${user.name}</h2>
            <p>${user.username}, email - ${user.email}</p>
            <div class="address">
                <h3>Address</h3>
                <p>street - ${user.address.street}</p>
                <p>suite - ${user.address.suite}</p>
                <p>city - ${user.address.city}</p>
                <p>zipcode - ${user.address.zipcode}</p>
                <h3>geo:</h3>
                <p>lat: ${user.address.geo.lat}</p>
                <p>lng: ${user.address.geo.lng}</p>
            </div>`;

        let btnUserPost = document.createElement('button');
        btnUserPost.innerText = 'post of current user';
        btnUserPost.classList.add('btn-user-post');

        btnUserPost.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let postWrap = document.createElement('div');
                    postWrap.classList.add('post-wrap');

                    let postTitle = document.createElement('div');
                    postTitle.innerText = 'User Posts';
                    postTitle.classList.add('post-title');

                    for (const post of posts) {
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('post-div');

                        let postBtn = document.createElement('button');
                        postBtn.innerText = 'post details';
                        postBtn.classList.add('post-btn');
                        postBtn.onclick = () => window.location = `../post-details/post-details.html?post_id=${post.id}`;

                        postDiv.innerText = `Post id - ${post.id} title: ${post.title}`;

                        postWrap.append(postDiv, postBtn);
                    }

                    wrapUser.append(postTitle, postWrap);
                });
        }

        wrapUser.append(userDiv, btnUserPost);
        document.body.append(divUserTitle, wrapUser);
    })

