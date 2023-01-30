
// create a createpost handler for when a user clicks the create post button
const createPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const post_date = new Date();


    if (title && content && post_date && posted_by) {
        const response = await fetch(`/api/posts/create`, {
            method: 'POST',
            body: JSON.stringify({ title, content, post_date, posted_by }),
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
document.querySelector('#create-post').addEventListener('click', createPostHandler);



// create a delete post handler for when a user clicks the delete post button
const deletePostHandler = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
};
// add event listeners to the form
document.querySelector('#delete-post').addEventListener('click', deletePostHandler);



// create a update post handler for when a user clicks the update post button
const updatePostHandler = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const post_date = document.querySelector('#post-date').value.trim();
    const posted_by = document.querySelector('#post-by').value.trim();
    if (title && content && post_date && posted_by) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content, post_date, posted_by }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};










