const deleteEl = document.querySelector('#delete-post');

const deletePostHandler = async (event) => {
    event.preventDefault();
    // add a prompt to confirm the user wants to delete the post
    const confirmation = window.confirm("Are you sure you want to delete this post?");
    const id = parseInt(document.querySelector('#post-id').textContent);
    if (confirmation) {
    
    const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
    }
    };
    // add event listeners to the form
    if (deleteEl) {
    deleteEl.addEventListener('click', deletePostHandler);
    }