let anoInicial = document.querySelector('#ano_inicial').value;
let anoAtual = document.querySelector('#ano_atual').value;
let btn = document.getElementById('btn');
let resultContainer = document.getElementById('result')

const verificaAno = () => {anoInicial > anoAtual};

function calculaAno(anoInicial, anoAtual) {
    if (verificaAno()) {
        const res = anoAtual - anoInicial;
        return console.log(res)
    } else {
        resultContainer.style.display='block';
        resultContainer.innerHTML= `O número Atual deve ser maior que o número Inicial`;
    }
}
btn.addEventListener('click', (e) => {
    e.preventDefault();
    calculaAno(anoInicial, anoAtual);

})