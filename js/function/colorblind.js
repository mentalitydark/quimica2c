function mudarcor(css, dropdown) {
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
