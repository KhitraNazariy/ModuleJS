// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList = 'wrap-users';
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList = 'user-item';
            userDiv.innerHTML = `
                <div>
                    <h3>ID - ${user.id}</h3>
                    <p>${user.name}</p>
                </div>
                <p>${user.username} - ${user.email}</p>
            `;
            let userBtn = document.createElement('button');
            userBtn.classList = 'user-btn';
            userBtn.innerText = 'Відкрити пости';
            userBtn.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(value => value.json())
                    .then(posts => {
                        for (const post of posts) {
                            let postDiv = document.createElement('div');
                            postDiv.classList = 'post-item';
                            postDiv.innerHTML = `
                                <h4>Post ID - ${post.id}</h4>
                                <p class="post-title">Title - ${post.title}</p>
                                <p>${post.body}</p>
                            `;
                            let postBtn = document.createElement('button');
                            postBtn.classList = 'post-btn';
                            postBtn.innerText = 'Відкрити коментарі';
                            postBtn.onclick = (id) => {
                                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                    .then(value => value.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            let commetnDiv = document.createElement('div');
                                            commetnDiv.classList = 'comment-item';
                                            commetnDiv.innerHTML = `
                                                <h4>Comment ID - ${comment.id}</h4>
                                                <p class="com_name">${comment.name}</p>  
                                                <p class="email">email - ${comment.email}</p>  
                                                <p>${comment.body}</p>
                                            `;
                                            postDiv.append(commetnDiv);
                                        }
                                    });
                            };
                            postDiv.append(postBtn);
                            userDiv.append(postDiv);
                        }
                    });
            };
            userDiv.append(userBtn);
            wrap.append(userDiv);
        }
        document.body.append(wrap);
    })