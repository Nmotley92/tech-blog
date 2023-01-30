const createPost = document.querySelector('#create-post');
const deletePost = document.querySelector('.delete-post');

// create a createpost handler for when a user clicks the create post button
const createPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const post_date = new Date();


    if (title && content && post_date) {
    const response = await fetch(`/api/posts/create`, {
            method: 'POST',
            body: JSON.stringify({ title, content, post_date}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};
// add event listeners to the form
if (createPost) {
    createPost.addEventListener('click', createPostHandler);
}
















