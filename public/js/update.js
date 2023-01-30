const updatePost = document.querySelector('#update-post');

// create a update post handler for when a user clicks the update post button
const updatePostHandler = async (event) => {
    event.preventDefault();
    
    
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const post_date = new Date().toLocaleString();
    const id= parseInt(document.querySelector('#post-id').textContent);
    console.log('poop');
    // const posted_by = document.querySelector('#posted_by').textContent;
    
    if (title && content && post_date) {
        const response = await fetch(`/api/posts/update/${id}`, {
            method: 'POST',
            body: JSON.stringify({ title, content, post_date }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(response);
            
        }
    }
};
if (updatePost) {
    // add event listeners to the form
updatePost.addEventListener('click', updatePostHandler);
}