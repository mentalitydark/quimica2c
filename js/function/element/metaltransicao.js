export const metaltransicaoTrue = function(
    metalalca, semimetal, metalrepre
    , lantanideos, gasnobre, metalalcaterro
    , halogenio, naometal, actinideos
) {
    naometal.forEach(function(div) {
        div.classList.add('invisivel');
    });
    semimetal.forEach(function(div) {
        div.classList.add('invisivel');
    });
    metalrepre.forEach(function(div) {
        div.classList.add('invisivel');
    });
    lantanideos.forEach(function(div) {
        div.classList.add('invisivel');
    });
    gasnobre.forEach(function(div) {
        div.classList.add('invisivel');
    });
    metalalca.forEach(function(div) {
        div.classList.add('invisivel');
    });
    halogenio.forEach(function(div) {
        div.classList.add('invisivel');
    });
    metalalcaterro.forEach(function(div) {
        div.classList.add('invisivel');
    });
    actinideos.forEach(function(div) {
        div.classList.add('invisivel');
    });
};
export const metaltransicaoFalse = function(
    metalalca, semimetal, metalrepre
    , lantanideos, gasnobre, metalalcaterro
    , halogenio, naometal, actinideos
) {
    naometal.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    semimetal.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    metalrepre.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    lantanideos.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    gasnobre.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    metalalca.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    halogenio.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    metalalcaterro.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    actinideos.forEach(function(div) {
        div.classList.remove('invisivel');
    });
};
