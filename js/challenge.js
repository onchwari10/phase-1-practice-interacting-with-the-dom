document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById('counter');
    const minusBtn = document.getElementById('minus');
    const plusBtn = document.getElementById('plus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
  
    let intervalID = setInterval(incrementCounter, 1000);
    let isPaused = false;
  
    minusBtn.addEventListener('click', decrementCounter);
    plusBtn.addEventListener('click', incrementCounter);
    heartBtn.addEventListener('click', likeCounter);
    pauseBtn.addEventListener('click', togglePause);
    commentForm.addEventListener('submit', addComment);
  
    function decrementCounter() {
      counter.textContent = parseInt(counter.textContent) - 1;
    }
  
    function incrementCounter() {
      counter.textContent = parseInt(counter.textContent) + 1;
    }
  
    function likeCounter() {
      const currentTime = counter.textContent;
      const existingLike = document.getElementById(`like-${currentTime}`);
  
      if (existingLike) {
        existingLike.dataset.likes++;
        existingLike.textContent = `${currentTime} has been liked ${existingLike.dataset.likes} times`;
      } else {
        const newLike = document.createElement('li');
        newLike.id = `like-${currentTime}`;
        newLike.dataset.likes = 1;
        newLike.textContent = `${currentTime} has been liked 1 time`;
        likesList.appendChild(newLike);
      }
    }
  
    function togglePause() {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(intervalID);
        pauseBtn.textContent = 'resume';
      } else {
        intervalID = setInterval(incrementCounter, 1000);
        pauseBtn.textContent = 'pause';
      }
    }
  
    function addComment(event) {
      event.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        document.getElementById('list').appendChild(newComment);
        commentInput.value = '';
      }
    }
  });
  