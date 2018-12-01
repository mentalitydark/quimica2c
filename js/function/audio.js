import {elementos} from '../element/elementos.js';

export function audioElemento(elemento) {
    const num = elemento.children[0].textContent*1;
    const a = (`Número atômico ${elementos[num-1].atomico}`);
    let b;
    if (elementos[num-1].sigla[1] !== undefined) {
        b = (`Sigla ${elementos[num-1].sigla[0]}
         ${elementos[num-1].sigla[1]}`);
    } else {
        b = (`Sigla ${elementos[num-1].sigla[0]}`);
    }
    const c = (`Nome ${elementos[num-1].nome}`);
    const d = (`Massa ${elementos[num-1].massa}`);
    const e = (`Familia ${elementos[num-1].familia}`);
    responsiveVoice.speak(a + ' ; ' + b + ' ; ' + c + ' ; ' + d + ' ; ' + e);
}

export function audioFamilia(elemento) {
    const x = elemento.classList[0];
    const familias = ['1A', '2A', '3B', '4B', '5B',
        '6B', '7B', '8B(1)', '8B(2)', '8B(3)', '1B',
        '2B', '3A', '4A', '5A', '6A', '7A', '8A'];
    const num = x.replace('f', '')*1;
    responsiveVoice.speak(familias[num-1]);
}
