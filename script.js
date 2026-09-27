const like_b = document.querySelector('#like');

let liked = false;

like_b.addEventListener('click', function() {
    liked = !liked;

    if (liked) {
        like_b.textContent = 'Liked';
    } else {
        like_b.textContent = 'Like'
    }
    like_b.classList.toggle('liked');
});