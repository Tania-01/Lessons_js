
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

const postInfoElement = document.getElementById('postInfo');
const commentsElement = document.getElementById('comments');


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postInformation = document.createElement('div');
        postInformation.innerHTML = `
            <p><strong>ID:</strong> ${post.id}</p>
            <p><strong>Title:</strong> ${post.title}</p>
            <p><strong>Body:</strong> ${post.body}</p>
            <!-- Додайте інші поля, які вам потрібні -->
        `;
        postInfoElement.appendChild(postInformation);
    })
    .catch(error => console.error('Помилка при отриманні інформації про пост:', error));


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('comment-block');

            const commentName = document.createElement('p');
            commentName.textContent = `Name: ${comment.name}`;

            const commentEmail = document.createElement('p');
            commentEmail.textContent = `Email: ${comment.email}`;

            const commentBody = document.createElement('p');
            commentBody.textContent = `Body: ${comment.body}`;

            commentBlock.appendChild(commentName);
            commentBlock.appendChild(commentEmail);
            commentBlock.appendChild(commentBody);

            commentsElement.appendChild(commentBlock);
        });
    })
    .catch(error => console.error('Помилка при отриманні коментарів поста:', error));
