export function audioElemento(elemento) {
    const a = (`Número atómico ${elemento.children[0].innerText}`);
    let b;
    if (elemento.children[1].innerText[1] !== undefined) {
        b = (`Sigla ${elemento.children[1].innerText[0]}
         ${elemento.children[1].innerText[1]}`);
    } else {
        b = (`Sigla ${elemento.children[1].innerText[0]}`);
    }
    const c = (`Nome ${elemento.children[2].innerText}`);
    const d = (`Massa ${elemento.children[3].innerText}`);
    const e = (`Classe ${elemento.classList[1].replace(/_/g, ' ')}`);

    responsiveVoice.speak(a + ' ; ' + b + ' ; ' + c + ' ; ' + d + ' ; ' + e);
}
