import {
    overlayGenStart
} from '../function/overlay.js';
let flag = true;
export function blindmode(cb) {
    const container = document.querySelector('#container');
    let decision;
    responsiveVoice.speak(`Deseja ativar o modo adaptado para cegos?
         Caso queira ativar,aperte a tecla S ou caso não queira ativar,
          aperte a tecla N.`);
    overlayGenStart(container);
    document.addEventListener('keydown', blindModeEvent);

    function blindModeEvent(b) {
        if (flag === true) {
            if (b.key === 's' || b.key === 'S') {
                decision = true;
                cb(decision);
                flag = false;
            } else if (b.key === 'n' || b.key === 'N') {
                decision = false;
                cb(decision);
                flag = false;
            }
            document.querySelector('.overlayStartupBackground').remove();
        }
    }
}
