import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const botaoimporta = document.querySelector('#botao-importa');
if (botaoimporta) {
    botaoimporta.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw Error('Botão importa não foi encontrado.');
}
//# sourceMappingURL=app.js.map