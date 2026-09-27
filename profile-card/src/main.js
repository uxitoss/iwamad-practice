import './style.css'
const buttons = document.querySelectorAll('.like-btn');

buttons.forEach(function(btn) {
  let liked = false;

  btn.addEventListener('click', function() {
    liked = !liked;

    if (liked) {
        btn.textContent = 'Liked';
    } else {
        btn.textContent = 'Like'
    }
    btn.classList.toggle('liked');

  });
});