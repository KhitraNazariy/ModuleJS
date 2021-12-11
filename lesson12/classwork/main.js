// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wrap = document.createElement('div');
        wrap.classList = 'wrap';
        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList = 'post-item';
            postDiv.innerHTML = `
                <h2>ID - ${post.id}</h2>
                <h3>${post.title}</h3>
                <p>${post.body}</p>`;

            let btn = document.createElement('button');
            btn.innerText = 'Відкрити коментарі';
            btn.classList = 'btn';

            btn.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id +'/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            let commentDiv = document.createElement('div');
                            commentDiv.classList = 'comment-item';
                            commentDiv.innerHTML = `
                                <h3>ID - ${comment.id}</h3>
                                <h3>${comment.name}</h3>
                                <p>email - ${comment.email}</p>   
                                <p>${comment.body}</p>   
                            `;
                            postDiv.append(commentDiv);
                        }
                    });
            }

            postDiv.append(btn);
            wrap.append(postDiv);
        }
        document.body.append(wrap)
    })