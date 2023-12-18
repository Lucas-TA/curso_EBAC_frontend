document.addEventListener('DOMContentLoaded', function() {
    
    let button = document.getElementById('btn');
    let num = 0;

    button.addEventListener('click', function() {
        let res = document.getElementById('counter_value');
        num += 1;

        res.innerText = num;

    })


})