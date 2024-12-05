$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });


    $('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            carroInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira o seu telefone',
            mensagem: 'Por favor, insira uma mensagem'
        },
        submitHandler: function (form) {
            console.log('Formulário enviado com sucesso:', form);
        },
        invalidHandler: function (event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            console.log(`Número de campos inválidos: ${camposIncorretos}`);
        }
    });

    $('.lista-cars button').click(function () {
        const destino = $('#contato');
        const nomeCarro = $(this).parent().find('h3').text();

        $('#carro-interesse').val(nomeCarro);
        $('#mensagem').val(`Gostaria de mais informações sobre o ${nomeCarro}.`);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });

    const rolarParaSecao = (seletorDestino) => {
        const destino = $(seletorDestino);
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    };

    $('#roll-loja').click(function () {
        rolarParaSecao('#sobre-a-loja');
    });

    $('#roll-comprados').click(function () {
        rolarParaSecao('#mais-comprados');
    });

    $('#roll-promo').click(function () {
        rolarParaSecao('#promocoes-do-dia');
    });

    $('#roll-contato').click(function () {
        rolarParaSecao('#contato');
    });
});
