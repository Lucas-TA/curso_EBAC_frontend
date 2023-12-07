$(document).ready(() => {

    const list = [];
    const ulContainer = $('#_main_ul');
    const errorMessageContainer = $('#error_message');

    function addItem(){
        const inputValue = $('#_input_item').val();

        if (inputValue.length > 0) {
            list.push(inputValue);
            errorMessageContainer.empty();
            updateItemsList();
        } else {
            $('<p>Tarefa precisa ter ao menos um caractere*</p>').appendTo(errorMessageContainer);
        }
    }
    function updateItemsList() {
        ulContainer.empty();

        list.forEach((item, index) => {
            const itemContainer = $(`
                <ul class="item-container">
                    <li>${item}</li>
                    <button class="delete-button" data-index="${index}">X</button>
                </ul>
                <hr>
            `);

            const deleteButton = itemContainer.find('.delete-button');
            deleteButton.click((e) => {
                const indexToDelete = $(e.target).data('index');
                list.splice(indexToDelete, 1);
                updateItemsList();
            });

            ulContainer.append(itemContainer);
        });
    }
    $('form').on('submit', (e) => {
        e.preventDefault();
        addItem()

        $('#_input_item').val('')
    
    });
    ulContainer.on('click','li',(e) => {
        const isRiscado = $(e.target);

        if(isRiscado.hasClass('riscado')) {
            isRiscado.removeClass('riscado')
        } else {
            isRiscado.addClass('riscado')
        }
    })
})