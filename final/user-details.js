
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

const userInfoElement = document.getElementById('userInfo');
const postsButton = document.getElementById('postsButton');
const userPostsElement = document.getElementById('userPosts');


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userInformation = document.createElement('div');
        userInformation.innerHTML = `
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <!-- Додайте інші поля, які вам потрібні -->
        `;
        userInfoElement.appendChild(userInformation);
    })
    .catch(error => console.error('Помилка при отриманні інформації про користувача:', error));


postsButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            userPostsElement.innerHTML = '';

            posts.forEach(post => {
                const postBlock = document.createElement('div');
                postBlock.classList.add('post-block');

                const postTitle = document.createElement('p');
                postTitle.textContent = post.title;

                const postDetailsButton = document.createElement('button');
                postDetailsButton.textContent = 'Post Details';
                postDetailsButton.addEventListener('click', () => {
                    // Перехід на сторінку post-details.html з ID поста
                    window.location.href = `post-details.html?id=${post.id}`;
                });

                postBlock.appendChild(postTitle);
                postBlock.appendChild(postDetailsButton);

                userPostsElement.appendChild(postBlock);
            });
        })
        .catch(error => console.error('Помилка при отриманні постів користувача:', error));
});
