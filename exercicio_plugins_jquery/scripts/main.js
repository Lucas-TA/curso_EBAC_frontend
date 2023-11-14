$(document).ready(() => {
    $('#tel_input').mask('(00) 0 0000-0000', {
        placeholder:'(99) 9 9999-9999'
    });
    $('#cpf_input').mask('000.000.000-00', {
        placeholder:'123.456.789-00'
    });
    $('#cep_input').mask('00000-000', {
        placeholder:'01234-567'
    });
})