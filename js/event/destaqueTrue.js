import {actinideosTrue} from '../function/element/actinideos.js';
import {gasnobreTrue} from '../function/element/gasnobre.js';
import {halogenioTrue} from '../function/element/halogenio.js';
import {lantanideosTrue} from '../function/element/lantanideos.js';
import {metalalcalinoTrue} from '../function/element/metalalcalino.js';
import {metalalcalinoterrosoTrue} from '../function/element/metalalcalinoterroso.js';
import {metalrepresentativoTrue} from '../function/element/metalrepresentativo.js';
import {metaltransicaoTrue} from '../function/element/metaltransicao.js';
import {naometalTrue} from '../function/element/naometal.js';
import {semimetalTrue} from '../function/element/semimetal.js';

const naometal = document.querySelectorAll('.elemento.naometal');
const metalalca = document.querySelectorAll('.elemento.metalalcalino');
const semimetal = document.querySelectorAll('.elemento.semimetal');
const metalrepre = document.querySelectorAll('.elemento.metalrepresentativo');
const lantanideos = document.querySelectorAll('.elemento.lantanideos');
const gasnobre = document.querySelectorAll('.elemento.gasnobre');
const metalalcaterro =document.querySelectorAll('.elemento.metalalcalinoterroso');
const halogenio = document.querySelectorAll('.elemento.halogenio');
const metaltransicao = document.querySelectorAll('.elemento.metaldetransicao');
const actinideos = document.querySelectorAll('.elemento.actinideos');
document.querySelectorAll('.legendadestaque')[0].addEventListener('mouseover', function() {
    naometalTrue(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[1].addEventListener('mouseover', function() {
    metalalcalinoTrue(
        naometal, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[2].addEventListener('mouseover', function() {
    metalalcalinoterrosoTrue(
        naometal, semimetal, metalrepre
        , lantanideos, gasnobre, metalalca
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[3].addEventListener('mouseover', function() {
    metaltransicaoTrue(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, naometal, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[4].addEventListener('mouseover', function() {
    metalrepresentativoTrue(
        metalalca, semimetal, naometal
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[5].addEventListener('mouseover', function() {
    semimetalTrue(
        naometal, metalalca, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[6].addEventListener('mouseover', function() {
    halogenioTrue(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , naometal, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[7].addEventListener('mouseover', function() {
    gasnobreTrue(
        metalalca, semimetal, metalrepre
        , lantanideos, naometal, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[8].addEventListener('mouseover', function() {
    lantanideosTrue(
        metalalca, semimetal, metalrepre
        , naometal, gasnobre, metalalcaterro
        , halogenio, metaltransicao, actinideos
    );
});
document.querySelectorAll('.legendadestaque')[9].addEventListener('mouseover', function() {
    actinideosTrue(
        metalalca, semimetal, metalrepre
        , lantanideos, gasnobre, metalalcaterro
        , halogenio, metaltransicao, naometal
    );
});
