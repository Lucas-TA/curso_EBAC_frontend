document.addEventListener('DOMContentLoaded', () => {
    const profileAvatar = document.getElementById('profileAvatar');

    const profileName = document.getElementById('profileName');
    const profileUsername = document.getElementById('profileUsername');

    const quantityRepository = document.getElementById('quantityRespository');
    const quantityFollowers = document.getElementById('quantityFollowers');
    const quantityFollowing = document.getElementById('quantityFollowing');

    const linkButton = document.getElementById('linkButton');

    const url = 'https://api.github.com/users/lucas-ta';

    fetch(url)
        .then( res => {
            return res.json();
        })
        .then( json => {
            profileAvatar.src = json.avatar_url;

            profileName.innerText = json.name;
            profileUsername.innerText = json.login;

            quantityRepository.innerText = json.public_repos;
            quantityFollowers.innerText = json.followers;
            quantityFollowing.innerText = json.following;

            linkButton.href = json.html_url;

        })
})