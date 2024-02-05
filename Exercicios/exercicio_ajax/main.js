document.addEventListener('DOMContentLoaded', () => {
    const profileAvatar = document.getElementById('profileAvatar');

    const profileName = document.getElementById('profileName');
    const profileUsername = document.getElementById('profileUsername');

    const quantityRepository = document.getElementById('quantityRespository');
    const quantityFollowers = document.getElementById('quantityFollowers');
    const quantityFollowing = document.getElementById('quantityFollowing');

    const searchForm = document.getElementById('searchForm');

    const errorMessage = document.getElementById('errorMessage')
    

    const linkButton = document.getElementById('linkButton');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const searchInput = document.getElementById('searchInput');
        const url = `https://api.github.com/users/${searchInput.value}`;

        fetch(url)
        .then( res => {
            if (!res.ok) {
                searchInput.classList.add('error-status')
                errorMessage.classList.remove('hidden')
                throw new Error("Não foi possível encontrar este usuário. Por favor tente novamente.")
            }
            return res.json();
        })
        .then( json => {

            searchInput.classList.remove('error-status')
            errorMessage.classList.add('hidden')

            profileAvatar.src = json.avatar_url;

            profileName.innerText = json.name;
            profileUsername.innerText = json.login;

            quantityRepository.innerText = json.public_repos;
            quantityFollowers.innerText = json.followers;
            quantityFollowing.innerText = json.following;

            linkButton.href = json.html_url;
        })
        .catch( function(error) {
            alert("Ops! Ocorreu um erro durante a requisição das informações, tente novamente mais tarde.")
        })
    })
})
