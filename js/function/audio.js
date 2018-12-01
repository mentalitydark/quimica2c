import {elementos} from '../element/elementos.js'

export function audioElemento(elemento) {
    const num = elemento.children[0].textContent*1
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
