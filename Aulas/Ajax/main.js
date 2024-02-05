document.addEventListener('DOMContentLoaded', () => {
    const searchCepButton = document.getElementById('searchCepButton');
    const inputAddress = document.getElementById('inputAddress');
    const searchIcon = document.getElementById('searchIcon');
    const searchSpinner = document.getElementById('searchSpinner');

    searchCepButton.addEventListener('click', () => {
        searchIcon.classList.add('d-none');
        searchSpinner.classList.remove('d-none');

        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

    //     const xhttp = new XMLHttpRequest(); 

    //     xhttp.onreadystatechange = function() {
    //         if (this.readyState === 4 && this.status === 200) {
    //             const response = JSON.parse(this.responseText);

    //             inputAddress.value = `${response.logradouro} - ${response.bairro} - ${response.localidade}/${response.uf}`

    //             searchIcon.classList.remove('d-none');
    //             searchSpinner.classList.add('d-none');
    //         }
    //     }

    //     xhttp.open('GET', endpoint)
    //     xhttp.send()

        fetch(endpoint)
            .then( function(response) {
                return response.json();
            })
            .then(function(json) {
                inputAddress.value = `${json.logradouro} - ${json.bairro} - ${json.localidade}/${json.uf}`
            })
            .catch( function(error) {
                alert("Ocorreu um erro ao buscar. Tente novamente.")
            })
            .finally( function() {
                searchIcon.classList.remove('d-none');
                searchSpinner.classList.add('d-none');
            })
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const form = document.getElementById('form');
        const nameInput = document.getElementById('nameInput');
        const surnameInput = document.getElementById('surnameInput');
        const emailInput = document.getElementById('emailInput');
        
        if (nameInput.value.length == 0) {
            throw new Error("Digite o nome");
        }
    })

})