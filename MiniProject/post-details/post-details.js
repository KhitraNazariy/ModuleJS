let paramsString = document.location.search;
let searchParams = new URLSearchParams(paramsString);
let post_id = searchParams.get('post_id');
console.log(post_id);

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(response => response.json())
    .then(post => {
        let postDivWrap = document.createElement('div');
        postDivWrap.classList.add('post-div-wrap');

        let postDivTitle = document.createElement('div');
        postDivTitle.classList.add('post-div-title');
        postDivTitle.innerText = `Detailed information about post with id - ${post.id}`;

        let postDivInfo = document.createElement('div');
        postDivInfo.classList.add('post-div-info');

        postDivInfo.innerHTML = `
            <h3>userId - ${post.userId}, postId - ${post.id}</h3>
            <p><b>title</b> - ${post.title}</p>
            <p><b>body</b> - ${post.body}</p>`;

        let commentBtn = document.createElement('button');
        commentBtn.classList.add('comment-btn');
        commentBtn.innerText = 'comments of current post';
        commentBtn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    for (const comment of comments) {
                        let commentDiv = document.createElement('div');
                        commentDiv.classList.add('comment-div');

                        commentDiv.innerHTML = `
                            <h3>id - ${comment.id}</h3>
                            <p><b>name</b> - ${comment.name}</p>
                            <p><b>email</b> - ${comment.email}</p>
                            <p><b>body</b> - ${comment.body}</p>
                            <br>
                            <hr>
                        `;

                        postDivInfo.append(commentDiv);
                    }
                });
        }

        postDivInfo.append(commentBtn);
        postDivWrap.append(postDivTitle, postDivInfo);
        document.body.append(postDivWrap);
    });