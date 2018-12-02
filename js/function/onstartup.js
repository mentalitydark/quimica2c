let flag = true;
export function blindmode(cb) {
    let decision;
    responsiveVoice.speak(`Deseja ativar o modo adaptado para cegos?
         Caso queira ativar,aperte a tecla S ou caso não queira ativar,
          aperte a tecla N.`);
    document.addEventListener('keydown', blindModeEvent);

    function blindModeEvent(b) {
        if (flag === true) {
            if (b.key === 's' || b.key === 'S') {
                responsiveVoice.speak(`
                    Atalhos:
                    Navegar pela família selecionada:
                    Seta para cima ou para baixo.
                    Navegar entre as famílias:
                    Seta para esquerda ou direita.
                    Selecionar elemento ou família:
                    Enter.
                    Tabela de Cátions e Ânions:
                    T.
                `);
                decision = true;
                cb(decision);
                flag = false;
            } else if (b.key === 'n' || b.key === 'N') {
                decision = false;
                cb(decision);
                flag = false;
            }
        }
    }
}
