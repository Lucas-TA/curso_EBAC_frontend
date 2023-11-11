$(document).ready(() => {
    $('#carousel-images').slick({
        autoplay: true,
    });
    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle()
    })
    $('#tel').mask('(00) 0 0000-0000', {
        placeholder:'(99) 9 9999-9999'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculo: {
                required: false,
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome",
            email: "E-mail inválido",
            telefone: "Telefone inválido",
        }
    })
    $('.lista-veiculos button').click(() => {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo').val(nomeVeiculo)
        $('html').animate({
            scrollTop:destino.offset().top
        }, 700)
    })
})