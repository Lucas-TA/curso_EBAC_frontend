document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let numMax = document.getElementById('numMax').value;
        numMax = parseInt(numMax);

        let randNum = Math.random() * numMax;
        randNum = Math.floor(randNum + 1)

        document.getElementById('resultadoValue').innerText = randNum;
    })
})