const dropContainer = document.getElementById('dropdown-item');
const button = document.querySelector('button');

function showComment() {
    dropContainer.classList.toggle('active');
}
button.addEventListener('click', showComment)
