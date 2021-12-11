// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let wrap = document.createElement('div');
//         wrap.classList = 'wrap';
//         for (const post of posts) {
//             let div = document.createElement('div');
//             div.classList = 'post-item';
//             div.innerHTML = `
//                 <div class="title">
//                     <h2>ID - ${post.id}</h2>
//                     <h3>User ID - ${post.userId}</h3>
//                 </div>
//                 <p class="title-des">${post.title}</p>
//                 <p>${post.body}</p>
//             `;
//             wrap.append(div);
//         }
//         document.body.append(wrap);
//     });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wrapComments = document.createElement('div');
        wrapComments.classList = 'wrapComments';

        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList = 'comment-item';

            commentDiv.innerHTML = `
                <div class="title-comment">
                    <h2>ID - ${comment.id}</h2>
                    <h2>UserID - ${comment.postId}</h2>
                </div>
                <h3>${comment.name}</h3>
                <p class="email">email - ${comment.email}</p>
                <p class="comment-body">${comment.body}</p>
            `;

            wrapComments.append(commentDiv);
        }

        document.body.append(wrapComments)
    })