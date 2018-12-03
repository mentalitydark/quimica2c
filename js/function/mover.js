import {
    audioElemento,
    audioFamilia,
    audioFieldSet,
    audiospan
} from './audio.js';
const mover = [0, 0]; // mover
let enter = true;
let bloco = true;
let trava = true;
let t = false;
let t1 = true;
let t2 = false;
let t3 = true;
const tc = [0, 1];
let ps = 0; // posição na tabela cation e anions
let test = 0;
let move = 0;
export function moverteclado(cb) {
    // eslint-disable-next-line max-statements
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 84 && t === false) {
            t = true;
            cb('t');
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].classList.add('bg'+tc[ps]);
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].style.backgroundColor = 'rgb(250, 168, 15)';
            t1 = false;
            audioFieldSet(document.querySelectorAll('.bg'+tc[ps])[0]);
        }
        if (e.keyCode === 39 && enter === true && bloco === true && t=== false) {
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
        if (e.keyCode === 37 && enter === true && bloco === true && t=== false) {
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
        if (e.keyCode === 13 && enter === false && trava === true && t=== false) {
            cb((document.querySelector('.sc').firstElementChild.textContent
            ) * 1);
            document.querySelector('.sair').hidden = true;
            bloco = false;
            trava = false;
        }

        if (e.keyCode === 13 && mover[0] > 0 && enter === true && t=== false) {
            enter = false;
            document.querySelectorAll('.F' + (mover[0])).forEach(function(td) {
                td.classList.add('destaque');
            });
            document.querySelectorAll('.F' +
                (mover[0]))[mover[1]].children[0].classList.add('sc');
            audioElemento(document.querySelector('.sc'));
        }
        if (e.keyCode === 40 && enter === false && trava === true && t=== false) {
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
        if (e.keyCode === 38 && enter === false && trava === true && t=== false) {
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
        if (e.keyCode === 27 && enter === false && bloco === true && t=== false) {
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
        if ( e.keyCode === 40 && t1 === false && t=== true ) {
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].classList.remove('bg'+tc[ps]);
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].style.backgroundColor = '';
            ps++;
            if (ps <0) {
                ps = 1;
            }
            if (ps >1) {
                ps = 0;
            }
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].classList.add('bg'+tc[ps]);
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].style.backgroundColor = 'rgb(250, 168, 15)';
            audioFieldSet(document.querySelectorAll('.bg'+tc[ps])[0]);

        }
        if ( e.keyCode === 38 && t1 === false && t=== true) {
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].classList.remove('bg'+tc[ps]);
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].style.backgroundColor = '';
            ps--;
            if (ps <0) {
                ps = 1;
            }
            if (ps >1) {
                ps = 0;
            }
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].classList.add('bg'+tc[ps]);
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].style.backgroundColor = 'rgb(250, 168, 15)';
            audioFieldSet(document.querySelectorAll('.bg'+tc[ps])[0]);
        }
        if (e.keyCode === 13 && t2 === true && t1 === true) {
            t3 = false;
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = '';
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].style.backgroundColor = 'rgb(250, 168, 15)';
            const h1 = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].children[0].textContent;
            const h2 = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].children[1].textContent;
            audiospan(h1, h2);
        }
        if (e.keyCode === 13 && t1 === false && t=== true) {
            t1 = true;
            t2 = true;
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset');
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].style.backgroundColor = '';
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = 'rgb(250, 168, 15)';
            audioFieldSet( document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test]);
        }
        if (e.keyCode === 39 && t2 === true && t=== true && t3 === true) {
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = '';
            test++;
            if (test > document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset').length-1) {
                test = 0;
            }
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = 'rgb(250, 168, 15)';
            audioFieldSet(document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test]);
        }
        if (e.keyCode === 37 && t2 === true && t=== true && t3 === true) {
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = '';
            test--;
            if (test < 0) {
                test = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset').length-1;
            }
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = 'rgb(250, 168, 15)';
            audioFieldSet(document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test]);
        }
        if (e.keyCode === 40 && t3 === false) {
            responsiveVoice.cancel();
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].style.backgroundColor = '';
            move++;
            if (move >document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div').length-1) {
                move = 0;
            }
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].style.backgroundColor = 'rgb(250, 168, 15)';
            const h1 = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].children[0].textContent;
            const h2 = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].children[1].textContent;
            audiospan(h1, h2);
        }
        if (e.keyCode ===38 && t3===false) {
            responsiveVoice.cancel();
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].style.backgroundColor = '';
            move--;
            if (move < 0) {
                move = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div').length-1;
            }
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].style.backgroundColor = 'rgb(250, 168, 15)';
            const h1 = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].children[0].textContent;
            const h2 = document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].children[1].textContent;
            audiospan(h1, h2);
        }

        if (e.keyCode === 27 && t1 === false && t === true && t2 === false && t3 === true) {
            t= false;
            bloco = true;
            trava = true;
            document.querySelector('.sair1').click();
            responsiveVoice.speak('Tabela Periódica');
        }
        if (e.keyCode === 27 && t2 === true && t=== true && t3=== true) {
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = '';
            audioFieldSet(document.querySelectorAll('.overlayTab')[0].children[tc[ps]]);
            t2 = false;
            t1 = false;
            test = 0;
            document.querySelectorAll('.overlayTab')[0].children[tc[ps]].style.backgroundColor = 'rgb(250, 168, 15)';
        }
        if (e.keyCode === 27 && t3 === false && t2 === true ) {
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].querySelectorAll('div')[move].style.backgroundColor = '';
            document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test].style.backgroundColor = 'rgb(250, 168, 15)';
            audioFieldSet(document.querySelectorAll('.bg'+tc[ps])[0].querySelectorAll('fieldset')[test]);
            t3 = true;
            move = 0;
        }
        if (e.keyCode === 27 && bloco === false && t=== false) {
            bloco = true;
            trava = true;
            responsiveVoice.cancel();
            document.querySelector('.sair').click();
            responsiveVoice.speak('Tabela Periódica');
        }
    });
}
