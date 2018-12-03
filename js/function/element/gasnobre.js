export const gasnobreTrue = function(
    metalalca, semimetal, metalrepre
    , lantanideos, naometal, metalalcaterro
    , halogenio, metaltransicao, actinideos
) {
    naometal.forEach(function(div) {
        div.classList.add('invisivel');
    });
    semimetal.forEach(function(div) {
        div.classList.add('invisivel');
    });
    metaltransicao.forEach(function(div) {
        div.classList.add('invisivel');
    });
    lantanideos.forEach(function(div) {
        div.classList.add('invisivel');
    });
    metalrepre.forEach(function(div) {
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
export const gasnobreFalse = function(
    metalalca, semimetal, metalrepre
    , lantanideos, naometal, metalalcaterro
    , halogenio, metaltransicao, actinideos
) {
    naometal.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    semimetal.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    metaltransicao.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    lantanideos.forEach(function(div) {
        div.classList.remove('invisivel');
    });
    metalrepre.forEach(function(div) {
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
