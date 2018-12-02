import {
    elementos
} from '../element/elementos.js';
import {supTransform} from './supTransform.js';
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
                    p12.innerHTML = supTransform(elementos[
                        (nat * 1) - 1].distribuicao);
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
    const numelementos = [[9, 7, 2, 2, 4, 1, 5], [36, 26, 9, 4]];
    const divnomes = [['cations', 'anions'],
        ['monodipositivostop', 'tripositivosplustop'],
        ['mononegativostop', 'dinegativostop', 'tritetranegativostop'],
        ['monopositivos', 'dipositivos', 'tripositivos', 'monodipositivos',
            'ditripositivos', 'monotripositivos', 'ditetranegativos'],
        ['mononegativos', 'dinegativos', 'trinegativos', 'tetranegativos']];
    let flag = false;
    let flag1 = false;
    const overlay = document.createElement('div');
    overlay.classList.add('overlayTab');
    for (let i=0; i<divnomes[0].length; i++) {
        const tabcatan = document.createElement('div');
        tabcatan.classList.add(divnomes[0][i]);
        if (i === 0) {
            for (let j=0; j<divnomes[1].length; j++) {
                const grupo = document.createElement('div');
                grupo.classList.add(divnomes[1][j]);

                for (let k = 0; k<divnomes[3].length; k++) {
                    if (j===1 && flag === false) {
                        k=2;
                        flag = true;
                    }
                    const divisoes = document.createElement('div');
                    divisoes.classList.add(divnomes[3][k]);
                    for (let l = 0; l<numelementos[i][k]; l++) {
                        const catan = document.createElement('div');
                        const sigla = document.createElement('span');
                        const nome = document.createElement('span');
                        catan.appendChild(sigla);
                        catan.appendChild(nome);

                        divisoes.appendChild(catan);
                    }
                    grupo.appendChild(divisoes);
                    if (j===0 && k===1) {
                        k=7;
                    }
                }
                tabcatan.appendChild(grupo);
            }
        } else {
            for (let j=0; j<divnomes[2].length; j++) {
                const grupo = document.createElement('div');
                grupo.classList.add(divnomes[2][j]);

                for (let k = 0; k<divnomes[4].length; k++) {
                    if (j===2 && flag1 === false) {
                        k=2;
                        flag1 = true;
                    }
                    if (j===1) {
                        k=1;
                    }
                    const divisoes = document.createElement('div');
                    divisoes.classList.add(divnomes[4][k]);
                    for (let l = 0; l<numelementos[i][k]; l++) {
                        const catan = document.createElement('div');
                        const sigla = document.createElement('span');
                        const nome = document.createElement('span');
                        catan.appendChild(sigla);
                        catan.appendChild(nome);

                        divisoes.appendChild(catan);
                    }
                    grupo.appendChild(divisoes);
                    if ((j===0 && k===0)||(j===1)) {
                        k=3;
                    }
                }
                tabcatan.appendChild(grupo);
            }
        }
        overlay.appendChild(tabcatan);
    }
    const sair = document.createElement('button');
    sair.textContent = 'sair';
    overlay.appendChild(sair);
    tbody.appendChild(overlay);
    sair.addEventListener('click', function(a) {
        document.querySelector('.overlayTab').remove();
    });
}
