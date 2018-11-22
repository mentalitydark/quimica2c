// import {row} from './main.js';

export function movteclado(row) {
    let index = 0;
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            if (index === 0) {
                index++;
                row[0].classList.add('selecionado');
            } else if (index < 18 && index > 0) {
                index++;
                for (let i = 0; i < 18; i++) {
                    row[i].classList.remove('selecionado');
                }
                row[(index - 1)].classList.add('selecionado');
            }
        }
        if (e.key === 'ArrowLeft') {
            if (index < 19 && index > 1) {
                index--;
                for (let i = 0; i < 18; i++) {
                    row[i].classList.remove('selecionado');
                }
                row[(index - 1)].classList.add('selecionado');
            }
        }
    });
}


