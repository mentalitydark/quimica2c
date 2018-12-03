import {actinideosFalse} from '../function/element/actinideos.js';
import {gasnobreFalse} from '../function/element/gasnobre.js';
import {halogenioFalse} from '../function/element/halogenio.js';
import {lantanideosFalse} from '../function/element/lantanideos.js';
import {metalalcalinoFalse} from '../function/element/metalalcalino.js';
import {metalalcalinoterrosoFalse} from '../function/element/metalalcalinoterroso.js';
import {metalrepresentativoFalse} from '../function/element/metalrepresentativo.js';
import {metaltransicaoFalse} from '../function/element/metaltransicao.js';
import {naometalFalse} from '../function/element/naometal.js';
import {semimetalFalse} from '../function/element/semimetal.js';

const naometal = document.querySelectorAll('.elemento.naometal');
const metalalca = document.querySelectorAll('.elemento.metalalcalino');
const semimetal = document.querySelectorAll('.elemento.semimetal');
const metalrepre = document.querySelectorAll('.elemento.metalrepresentativo');
const lantanideos = document.querySelectorAll('.elemento.lantanideos');
const gasnobre = document.querySelectorAll('.elemento.gasnobre');
const metalalcaterro = document.querySelectorAll('.elemento.metalalcalinoterroso');
const halogenio = document.querySelectorAll('.elemento.halogenio');
const metaltransicao = document.querySelectorAll('.elemento.metaldetransicao');
const actinideos = document.querySelectorAll('.elemento.actinideos');
document.querySelectorAll('.legendadestaque')[0].addEventListener('mouseout', function() {
    naometalFalse(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[1].addEventListener('mouseout', function() {
    metalalcalinoFalse(
        naometal, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[2].addEventListener('mouseout', function() {
    metalalcalinoterrosoFalse(
        naometal, semimetal, metalrepre
        , lantanideos, gasnobre, metalalca
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[3].addEventListener('mouseout', function() {
    metaltransicaoFalse(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, naometal, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[4].addEventListener('mouseout', function() {
    metalrepresentativoFalse(
        metalalca, semimetal, naometal
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[5].addEventListener('mouseout', function() {
    semimetalFalse(
        naometal, metalalca, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[6].addEventListener('mouseout', function() {
    halogenioFalse(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , naometal, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[7].addEventListener('mouseout', function() {
    gasnobreFalse(
        metalalca, semimetal, metalrepre
        , lantanideos, naometal, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[8].addEventListener('mouseout', function() {
    lantanideosFalse(
        metalalca, semimetal, metalrepre
        , naometal, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[9].addEventListener('mouseout', function() {
    actinideosFalse(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, naometal
    );
});
