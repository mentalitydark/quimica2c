export const lang = ['Brazilian Portuguese Female', 'Brazilian Portuguese Male',
    'US English Female',
    'US English Male'
];
let flag = true;
export function blindmode(cb) {
    let decision;
    responsiveVoice.speak(`Deseja ativar o modo
     adaptado para cegos? Pressione S para sim,
      e N para não`, lang[0], {
        rate: 1
    });
    document.addEventListener('keydown', blindModeEvent);

    function blindModeEvent(b) {
        if (flag === true) {
            if (b.key === 's') {
                decision = true;
                cb(decision);
                flag = false;
            } else if (b.key === 'n') {
                decision = false;
                cb(decision);
                flag = false;
            }
        }
    }
}
