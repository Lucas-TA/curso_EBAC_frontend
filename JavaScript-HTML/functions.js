let anoInicial = document.getElementById('ano_inicial');
let anoAtual = document.getElementById('ano_atual');
let button = document.getElementById('btn');
let resultContainer = document.getElementById('result')

const validation = () => { 
    return parseInt(anoAtual.value) >= parseInt(anoInicial.value) 
}

function calculate() {
    if(validation()) {
        const res = parseInt(anoAtual.value) - parseInt(anoInicial.value);
        resultContainer.classList.remove('incorrect');
        resultContainer.classList.add('correct');
        resultContainer.style.display = 'block';
        resultContainer.innerHTML = `do ano ${parseInt(anoInicial.value)} até o ano ${parseInt(anoAtual.value)} se passaram ${res} anos` ;

        anoInicial.value = '';
        anoAtual.value = '';
    } else {
        resultContainer.classList.remove('correct');
        resultContainer.classList.add('incorrect');
        resultContainer.style.display = 'block';
        resultContainer.innerHTML = `Ano Final deve ser maior que ano inicial!` ;

        anoInicial.value = '';
        anoAtual.value = '';
    }
}
button.addEventListener('click', (e) => {
    e.preventDefault()
    calculate()
})