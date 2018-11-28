import {elementos_1} from './element/elementos_1.js';
import {elementos_2} from './element/elementos_2.js';
import {GeradorTabela} from './function/gerador.js';
const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tabela = [
    [0, 2, 10, 18, 36, 54, 86, 'MTI', 'MTI'],
    ['', 3, 11, 19, 37, 55, 87, 'MTI', 'MTI'],
    ['', '', '', 20, 38, '*', '**', '*', '**'],
    ['', '', '', 21, 39, 71, 103, 56, 88],
    ['', '', '', 22, 40, 72, 104, 57, 89],
    ['', '', '', 23, 41, 73, 104, 58, 90],
    ['', '', '', 24, 42, 74, 106, 59, 91],
    ['', '', '', 25, 43, 75, 107, 60, 92],
    ['', '', '', 26, 44, 76, 108, 61, 93],
    ['', '', '', 27, 45, 77, 109, 62, 94],
    ['', '', '', 28, 46, 78, 110, 63, 95],
    ['', '', '', 29, 47, 79, 111, 64, 96],
    ['', 4, 12, 30, 48, 80, 112, 65, 97],
    ['', 5, 13, 31, 49, 81, 113, 66, 98],
    ['', 6, 14, 32, 50, 82, 114, 67, 99],
    ['', 7, 15, 33, 51, 83, 115, 68, 100],
    ['', 8, 16, 34, 52, 84, 116, 69, 101],
    [1, 9, 17, 35, 53, 85, 117, 70, 102],
];
console.log(tabela.length)
const row = [];
const tr = document.createElement('tr');

for (let i=1; i <= 18; i++) {
    const familia = ['', 'I A', 'II A', 'III B', 'IV B', 'V B', 'VI B', 'VII B', 'VIII B', 'VIII B', 'VIII B',
                     'III B', 'II B', 'III A', 'IV A', 'V A', 'VI A', 'VII A', 'VIII A'];
    const th = document.createElement('th');
    row.push(th);
    th.textContent = familia[i];
    th.className = 'f'+i;
    tr.appendChild(th);
    thead.appendChild(tr);
}
GeradorTabela(tabela, elementos_1, elementos_2, tbody);
