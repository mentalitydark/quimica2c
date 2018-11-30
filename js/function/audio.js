export const audio = function(acao) {
    const audioAD = document.querySelectorAll('.audio_icone')
    if (acao === 'N' || acao === 'n') {
        audioAD[1].style.zIndex = 2;
    }
}
export const AtivarDesativar = function(event) {
    const acao = event.parentElement;
    if (acao[1].style.zIndex === '2') {
        acao[1].style.zIndex = 0;
        acao[0].style.zIndex = 1;
    } else {
        acao[1].style.zIndex = 2;
        acao[0].style.zIndex = 0;
    }
}
