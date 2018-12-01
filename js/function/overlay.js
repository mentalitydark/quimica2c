/* eslint-disable max-statements */
import {
    elementos
} from '../element/elementos.js';
import {SupTransform} from './supTransform.js';
// import {tbody} from '../main.js';
const nomesdiv = ['divElementoEstado', 'divFusaoEbulicao', 'divFamiliaNox',
    'divDistribuicaoValecia', 'divCuriosidades'
];
const nomesdivinf = ['element', 'estado', 'fusao',
    'ebulicao', 'familia', 'nox',
    'distribuicao', 'valencia', 'curiosidade'
];
export function overlayGenElement(nat, tbody) {
    let aux = 0;
    const overlay = document.createElement('div');
    overlay.classList.add('overlayElemento');
    tbody.appendChild(overlay);
    const divmenoselemento = document.createElement('div');
    const divFusEbuFamNoxDisVal = document.createElement('div');
    const divFusEbuFamNox = document.createElement('div');
    for (let i = 0; i < nomesdiv.length; i++) {
        const div = document.createElement('div');
        div.classList.add(nomesdiv[i]);
        if (i !== 4) {
            for (let j = 0; j < 2; j++) {
                const subdiv = document.createElement('div');
                subdiv.classList.add(`${nomesdivinf[aux]}`);
                if (aux === 0) {
                    subdiv.classList.add(`${elementos[(nat * 1) - 1].class}`);
                    const nomep = document.createElement('p');
                    const siglap = document.createElement('strong');
                    const massap = document.createElement('p');
                    const atomicop = document.createElement('span');
                    const vetinf = [atomicop, siglap, nomep, massap];
                    nomep.textContent = elementos[(nat * 1) - 1].nome;
                    siglap.textContent = elementos[(nat * 1) - 1].sigla;
                    massap.textContent = elementos[(nat * 1) - 1].massa;
                    atomicop.textContent = elementos[(nat * 1) - 1].atomico;
                    nomep.classList.add('nomeO');
                    siglap.classList.add('siglaO');
                    atomicop.classList.add('numeroO');
                    massap.classList.add('massaO');
                    for (let k = 0; k < vetinf.length; k++) {
                        subdiv.appendChild(vetinf[k]);
                    }
                } else if (aux === 1) {
                    const p1 = document.createElement('span');
                    p1.textContent = `${elementos[(nat * 1) - 1].estado}`;
                    subdiv.appendChild(p1);
                } else if (aux === 2) {
                    const p3 = document.createElement('span');
                    const p4 = document.createElement('span');
                    p3.textContent = 'Fusão:';
                    p4.textContent = elementos[(nat * 1) - 1].fusao;
                    subdiv.appendChild(p3);
                    subdiv.appendChild(p4);
                } else if (aux === 3) {
                    const p5 = document.createElement('span');
                    const p6 = document.createElement('span');
                    p5.textContent = 'Ebulicão';
                    p6.textContent = elementos[(nat * 1) - 1].ebulicao;
                    subdiv.appendChild(p5);
                    subdiv.appendChild(p6);
                } else if (aux === 4) {
                    const p7 = document.createElement('span');
                    const p8 = document.createElement('span');
                    p7.textContent = 'Família:';
                    p8.textContent = elementos[(nat * 1) - 1].familia;
                    subdiv.appendChild(p7);
                    subdiv.appendChild(p8);
                } else if (aux === 5) {
                    const p9 = document.createElement('span');
                    const p10 = document.createElement('span');
                    p9.textContent = 'NOX:';
                    p10.textContent = elementos[(nat * 1) - 1].nox;
                    subdiv.appendChild(p9);
                    subdiv.appendChild(p10);
                } else if (aux === 6) {
                    const p11 = document.createElement('span');
                    const p12 = document.createElement('span');
                    p11.textContent = 'Distribuição:';
                    p12.innerHTML = SupTransform(elementos[(nat * 1) - 1].distribuicao);
                    subdiv.appendChild(p11);
                    subdiv.appendChild(p12);
                } else if (aux === 7) {
                    const p13 = document.createElement('span');
                    const p14 = document.createElement('span');
                    p13.textContent = 'Valência:';
                    p14.textContent = elementos[(nat * 1) - 1].valencia;
                    subdiv.appendChild(p13);
                    subdiv.appendChild(p14);
                }
                div.appendChild(subdiv);
                aux++;
            }
            if (i>0 && i<3) {
                divFusEbuFamNox.appendChild(div);
            }
            if (i===3) {
                divFusEbuFamNoxDisVal.appendChild(divFusEbuFamNox);
                divFusEbuFamNoxDisVal.appendChild(div);
            }
            if (i === 0) {
                divmenoselemento.appendChild(div);
            }
            divmenoselemento.appendChild(divFusEbuFamNoxDisVal);
        } else {
            const subdiv = document.createElement('fieldset');
            subdiv.classList.add(nomesdivinf[8]);
            const p15 = document.createElement('legend');
            const p16 = document.createElement('p');
            p15.textContent = 'Curiosidades:';
            p16.textContent = elementos[(nat * 1) - 1].curiosidade;
            subdiv.appendChild(p15);
            subdiv.appendChild(p16);
            div.appendChild(subdiv);
            overlay.appendChild(divmenoselemento);
            overlay.appendChild(div);
        }
    }
    const sair = document.createElement('button');
    sair.textContent = 'sair';
    sair.className = 'sair';
    overlay.appendChild(sair);
    sair.addEventListener('click', function() {
        const overlay = document.querySelectorAll('.overlayElemento');
        for (let i = 0; i < overlay.length; i++) {
            overlay[i].remove();
        }
    });
    document.addEventListener('keydown', function(a) {
        if (a.keyCode === 27) {
            const overlay = document.querySelectorAll('.overlayElemento');
            for (let i = 0; i < overlay.length; i++) {
                overlay[i].remove();
            } responsiveVoice.cancel();
        }
    });
}
export function overlayGenTab(tbody) {
    const div = document.createElement('div');
    div.classList = 'overlayTab';
    // div.appendAll(function(elements) {
    //     for (const e of elements) this.appendChild(e);
    // });
    const sair = document.createElement('button');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    p1.textContent = 'TESTE';
    p2.textContent = 'TESTE';
    p3.textContent = 'TESTE';
    p4.textContent = 'TESTE';
    p5.textContent = 'TESTE';
    sair.textContent = 'sair';
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(sair);
    tbody.appendChild(div);
    sair.addEventListener('click', function(a) {
        document.querySelector('.overlayTab').remove();
    });
}
