window.addEventListener('load',() => {
    const display = document.getElementById('operador');
    const botones = document.querySelectorAll('.keypad-buttons');

    botones.forEach((button) => {
        button.addEventListener('click', () => {
            calculadora(button, display);
        });
    });
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case '=':
            display.value = Function('"use strict";return (' + display.value + ')')();
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function actualizar(display, button) {
    if (display.value == 0) {
        display.value = '';
    }
    display.value += button.innerHTML;
}
