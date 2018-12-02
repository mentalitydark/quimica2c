import {
    audioElemento,
    audioFamilia
} from './audio.js';
const mover = [0, 0]; // mover
let enter = true;
let bloco = true;
let trava = true;
export function moverteclado(cb, trave) {
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 84) {
            cb('t');
        }
        if (e.keyCode === 39 && enter === true && bloco === true) {
            mover[0]++;
            if (mover[0] >= 19) {
                mover[0] = 1;
            }
            document.querySelectorAll('th').forEach(function(th) {
                th.classList.remove('selecionado');
            });
            document.querySelectorAll('.f' + (mover[0])).forEach(function(td) {
                td.classList.add('selecionado');
            });
            audioFamilia(document.querySelector('.selecionado'));
        }
        if (e.keyCode === 37 && enter === true && bloco === true) {
            mover[0]--;
            if (mover[0] <= 0) {
                mover[0] = 18;
            }
            if (mover[0] >= 19) {
                mover[0] = 1;
            }
            document.querySelectorAll('th').forEach(function(th) {
                th.classList.remove('selecionado');
            });
            document.querySelectorAll('.f' + (mover[0])).forEach(function(th) {
                th.classList.add('selecionado');
            });
            audioFamilia(document.querySelector('.selecionado'));
        }
        if (e.keyCode === 13 && enter === false && trava === true) {
            cb((document.querySelector('.sc').firstElementChild.textContent
            ) * 1);
            document.querySelector('.sair').remove();
            bloco = false;
            trava = false;
        }

        if (e.keyCode === 13 && mover[0] > 0 && enter === true) {
            enter = false;
            document.querySelectorAll('.F' + (mover[0])).forEach(function(td) {
                td.classList.add('destaque');
            });
            document.querySelectorAll('.F' +
                (mover[0]))[mover[1]].children[0].classList.add('sc');
            audioElemento(document.querySelector('.sc'));
            document.querySelector('.sair').remove();
        }
        if (e.keyCode === 40 && enter === false && trava === true) {
            document.querySelectorAll('div').forEach(function(div) {
                div.classList.remove('sc');
            });
            const limit = document.querySelectorAll('.F' + (mover[0])).length;
            mover[1]++;
            if (mover[1] === limit) {
                mover[1] = 0;
            }
            document.querySelectorAll('.F' +
                (mover[0]))[mover[1]].children[0].classList.add('sc');
            audioElemento(document.querySelector('.sc'));
        }
        if (e.keyCode === 38 && enter === false && trava === true) {
            document.querySelectorAll('div').forEach(function(div) {
                div.classList.remove('sc');
            });
            const limit = document.querySelectorAll('.F' + (mover[0])).length;
            mover[1]--;
            if (mover[1] < 0) {
                mover[1] = limit - 1;
            }
            document.querySelectorAll('.F' +
                (mover[0]))[mover[1]].children[0].classList.add('sc');
            audioElemento(document.querySelector('.sc'));
        }
        if (e.keyCode === 27 && enter === false && bloco === true) {
            document.querySelectorAll('div').forEach(function(div) {
                div.classList.remove('sc');
            });
            document.querySelectorAll('.F' + (mover[0])).forEach(function(td) {
                td.classList.remove('destaque');
            });
            enter = true;
            mover[1] = 0;
            responsiveVoice.cancel();
        }
        if (e.keyCode === 27 && bloco === false) {
            bloco = true;
            trava = true;
        }
    });
}
