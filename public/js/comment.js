// add event listeners to the click add comment form
const addComment = document.querySelector('#add-comment');
const submitComment = document.querySelector('#submit-comment');

if (addComment) {
    addComment.addEventListener('click', ()=> {
        document.querySelector('.comment-form').classList.toggle('hidden');
    });
}


if (submitComment) {
submitComment.addEventListener('click', async ()=> {


const comment_text = document.querySelector('#comment-content').value.trim();
const comment_date = new Date().toLocaleString();
const post_id = document.querySelector('#post-id').textContent;


console.log(post_id);

if (comment_text) {
    const response = await fetch(`/api/posts/create/comment/${post_id}`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, comment_date, post_id}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace(`/post/${post_id}`);
    } else {
        
        alert('Failed to add comment');
    }
}
}
);
}