$(document).ready(function() {
    $('header button').click(() => {
        $('form').slideDown();
    })
    $('.cancel-button').click(() => {
        $('form').slideUp();
    })
    $('form').on('submit', (e) => {
        e.preventDefault();
        const newImageUrl = $('#imagem_url').val();
        const newImageLi = $('<li style="display: none"></li>');
        $(`<img src="${newImageUrl}" />`).appendTo(newImageLi);
        $(`<div class="overlay-imagem-link">
            <a href="${newImageUrl}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(newImageLi);
        $(newImageLi).appendTo('ul');
        $(newImageLi).fadeIn();
        $('#imagem_url').val('')
    })
})