export function mouse(cb) {
    document.addEventListener('click', function(e) {
        if (e.target.tagName === ('DIV') &&
            e.target.classList.contains('elemento') === true) {
            cb(e.target.firstChild.textContent);
        } else if (e.target.parentElement.tagName ===
            ('DIV') &&
            e.target.parentElement.classList.contains('elemento') === true) {
            cb(e.target.parentElement.firstChild.textContent);
        }
    });
}
