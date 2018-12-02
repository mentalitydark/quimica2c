const css = document.querySelector('#corcss');
const cor = document.querySelector('#cor');
const select = document.querySelector('select');
const mudarcor = function (css, dropdown) {
    if (dropdown.value === 'deuteranopia') {
        css.setAttribute('href', './css/cores/deuteranopia.css');
    } else if (dropdown.value === 'protanopia') {
        css.setAttribute('href', './css/cores/protanopia.css');
    } else if (dropdown.value === 'cores normais') {
        css.setAttribute('href', './css/cores/cornormal.css');
    } else if (dropdown.value === 'tritanopia') {
        css.setAttribute('href', './css/cores/tritanopia.css');
    }
    console.log(dropdown.value);
}
select.addEventListener('change', function() {mudarcor(css, cor)})
